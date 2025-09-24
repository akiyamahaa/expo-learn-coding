// src/screens/Learning.tsx
import React, { useMemo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Box } from "@gluestack-ui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WebView from "react-native-webview";
import { ArrowLeft2 } from "iconsax-react-native";

type RouteParams = { videoUrl: string };

function toYouTubeEmbed(url: string): string {
  try {
    const u = new URL(url.trim());
    // youtu.be/<id>?...
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace("/", "");
      const query = u.searchParams;
      // giữ lại param hữu ích nếu có
      const params = new URLSearchParams();
      if (query.get("t")) params.set("start", query.get("t")!.replace("s", ""));
      params.set("playsinline", "1");
      return `https://www.youtube.com/embed/${id}?${params.toString()}`;
    }
    // www.youtube.com/watch?v=<id>
    if (u.hostname.includes("youtube.com") && u.pathname === "/watch") {
      const id = u.searchParams.get("v");
      if (id) {
        const params = new URLSearchParams();
        const t = u.searchParams.get("t");
        if (t) params.set("start", t.replace("s", ""));
        params.set("playsinline", "1");
        return `https://www.youtube.com/embed/${id}?${params.toString()}`;
      }
    }
    // đã là /embed/<id> thì giữ nguyên, thêm playsinline
    if (
      u.hostname.includes("youtube.com") &&
      u.pathname.startsWith("/embed/")
    ) {
      const params = u.searchParams;
      params.set("playsinline", "1");
      return `https://www.youtube.com${u.pathname}?${params.toString()}`;
    }
  } catch {}
  // fallback: trả lại nguyên URL (đề phòng không phải youtube)
  return url;
}

export default function Learning() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<any>();
  const { videoUrl } = useRoute<any>().params as RouteParams;

  const embedUrl = useMemo(() => toYouTubeEmbed(videoUrl), [videoUrl]);

  const html = `
    <html><head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        html,body { margin:0; padding:0; height:100%; background:#000; }
        .wrap { position:fixed; inset:0; }
        iframe { width:100%; height:100%; border:0; }
      </style>
    </head>
    <body>
      <div class="wrap">
        <iframe
          src="${embedUrl}"
          title="YouTube player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </body></html>
  `;

  return (
    <Box flex={1} bg="$black">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[styles.backButton, { top: top + 12 }]}
        hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
      >
        <ArrowLeft2 size="24" color="#fff" />
      </TouchableOpacity>

      <WebView
        source={{ html }}
        style={styles.webview}
        originWhitelist={["*"]}
        allowsFullscreenVideo
        javaScriptEnabled
        domStorageEnabled
        // iOS: cho phép phát inline trong WKWebView
        allowsInlineMediaPlayback
        // Android: nếu cần, tránh chặn mixed content (hiếm khi cần với https)
        // mixedContentMode="always"
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    left: 16,
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 8,
    borderRadius: 24,
  },
  webview: { flex: 1 },
});
