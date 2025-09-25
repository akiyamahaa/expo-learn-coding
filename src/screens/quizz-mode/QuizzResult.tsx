// src/screens/QuizzResult.tsx
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Box, Text, VStack, HStack } from "@gluestack-ui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MotiView } from "moti";
import LottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");
const BADGE_SIZE = width * 0.4;
const STAR_SIZE = 32;

enum EResultType {
  GOOD,
  BAD,
}

const RETURN_CFG = {
  [EResultType.GOOD]: {
    title: "You are amazing! 🎉",
    subtitle: "You have completed it successfully!",
    gradient: ["#FFD54F", "#FFB300"],
    animation: require("../../assets/animations/trophy.json"),
    starColor: "#FFC107",
    messages: [
      "Awesome, you’re a star! 🚀",
      "Excellent! Keep it up! 🌟",
      "Great job, stay consistent! 👍",
    ],
  },
  [EResultType.BAD]: {
    title: "Oh no! 😢",
    subtitle: "Try again next time!",
    gradient: ["#EF9A9A", "#E57373"],
    animation: require("../../assets/animations/sad.json"),
    starColor: "#B0BEC5",
    messages: [
      "Don’t give up, try harder next time! 💪",
      "You did your best, keep practicing! 📚",
      "Every failure is a step toward success! 🌱",
    ],
  },
};

const LEVEL_LABEL: Record<string, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

export default function QuizzResult() {
  const { score, total, level } = useRoute<any>().params;
  const navigation = useNavigation<any>();
  const type = score / total >= 0.5 ? EResultType.GOOD : EResultType.BAD;
  const cfg = RETURN_CFG[type];

  // Random encouragement message
  const [encourage] = useState(() => {
    const arr = cfg.messages;
    return arr[Math.floor(Math.random() * arr.length)];
  });

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const starCount = Math.round((score / total) * 5);

  return (
    <LinearGradient
      colors={cfg.gradient as any}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.container}
    >
      {/* Background animation */}
      <LottieView
        source={cfg.animation}
        autoPlay
        loop={type === EResultType.BAD}
        style={StyleSheet.absoluteFill}
      />

      <VStack flex={1} justifyContent="center" alignItems="center" px="$4">
        {/* Badge */}
        <MotiView
          from={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          style={styles.badgeContainer}
        >
          <Box
            width={BADGE_SIZE}
            height={BADGE_SIZE}
            rounded="$full"
            bg="rgba(255,255,255,0.3)"
            justifyContent="center"
            alignItems="center"
          >
            <LottieView
              source={cfg.animation}
              autoPlay
              loop={false}
              style={{ width: BADGE_SIZE * 0.8, height: BADGE_SIZE * 0.8 }}
            />
          </Box>
        </MotiView>

        {/* Title */}
        <Text
          fontSize="$3xl"
          fontWeight="$bold"
          color="#fff"
          textAlign="center"
          mt="$4"
        >
          {cfg.title}
        </Text>
        {/* Show level */}
        <Box bg="rgba(255,255,255,0.3)" px="$4" py="$1" rounded="$full" mt="$2">
          <Text fontSize="$md" fontWeight="$semibold" color="#fff">
            Level: {LEVEL_LABEL[level] || level}
          </Text>
        </Box>
        {/* Subtitle */}
        <Text fontSize="$md" color="#fff" textAlign="center" mb="$4" mt="$2">
          {cfg.subtitle}
        </Text>

        {/* Encouragement */}
        <Text
          fontSize="$lg"
          fontWeight="$semibold"
          color="#fff"
          textAlign="center"
          mb="$6"
        >
          {encourage}
        </Text>

        {/* Score */}
        <MotiView
          from={{ scale: 0.8 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            loop: true,
            type: "timing",
            duration: 800,
            delay: 300,
          }}
        >
          <Text
            fontSize="$6xl"
            fontWeight="$black"
            color="#fff"
            textAlign="center"
          >
            {score}/{total}
          </Text>
        </MotiView>

        {/* Stars */}
        <HStack mt="$4">
          {[...Array(5)].map((_, i) => (
            <FontAwesome
              key={i}
              name="star"
              size={STAR_SIZE}
              color={i < starCount ? cfg.starColor : "rgba(255,255,255,0.4)"}
              style={{ marginHorizontal: 4 }}
            />
          ))}
        </HStack>
      </VStack>

      {/* Buttons */}
      <VStack mb="$8" px="$8" space="xl">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Box
            bg="$white"
            py="$3"
            rounded="$full"
            alignItems="center"
            style={styles.buttonShadow}
          >
            <Text fontSize="$lg" fontWeight="$semibold" color={cfg.gradient[0]}>
              Retry Quiz
            </Text>
          </Box>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Box
            bg="$white"
            py="$3"
            rounded="$full"
            alignItems="center"
            style={styles.buttonShadow}
          >
            <Text fontSize="$lg" fontWeight="$semibold" color={cfg.gradient[0]}>
              Back to Home
            </Text>
          </Box>
        </TouchableOpacity>
      </VStack>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  badgeContainer: {
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonShadow: {
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
});
