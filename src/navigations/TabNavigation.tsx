import { StyleSheet, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import { Text } from "@gluestack-ui/themed";
import { BottomTabsParams } from "./config";
import Ionicons from "@expo/vector-icons/Ionicons";
import Quizz from "../screens/quizz-mode/Quizz";
import Practice from "../screens/practice/Practice";
import { UseTokenColor } from "../hook/UseTokenColor";

const Tab = createBottomTabNavigator<BottomTabsParams>();

interface ITabIcon {
  focused: boolean;
  name: keyof typeof Ionicons.glyphMap;
  title: string;
}

const TabIcon = ({ focused, name, title }: ITabIcon) => {
  const colors = UseTokenColor();
  return (
    <View style={styles.tabItem}>
      <Ionicons
        name={name}
        size={20}
        color={focused ? colors.primary600 : colors.warmGray600}
      />

      {/* NGĂN XUỐNG DÒNG + THU NHỎ NẾU CẦN */}
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        // adjustsFontSizeToFit // (tuỳ chọn) nếu muốn tự co chữ thay vì dấu "..."
        fontSize={10}
        fontWeight={"$medium"}
        color={focused ? colors.primary600 : colors.warmGray600}
        style={styles.tabLabel}
      >
        {title}
      </Text>
    </View>
  );
};

export const TabData = [
  { id: 1, tabName: "Home", title: "Home", iconName: "home", component: Home },
  {
    id: 2,
    tabName: "Quizz",
    title: "Quiz",
    iconName: "apps",
    component: Quizz,
  },
  {
    id: 3,
    tabName: "Practice",
    title: "Practice",
    iconName: "information-circle-sharp",
    component: Practice,
  }, // sửa chính tả
];

const TabNavigation = () => {
  const colors = UseTokenColor();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // dùng label custom ở TabIcon
        tabBarItemStyle: {
          // CĂN GIỮA NÚT TAB
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          // (khuyến nghị) chiều cao & padding ổn định
          height: 60,
          paddingTop: 6,
          paddingBottom: 6,
        },
      }}
    >
      {TabData.map((tab) => (
        <Tab.Screen
          key={tab.id}
          name={tab.tabName as any}
          component={tab.component}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                name={tab.iconName as any}
                title={tab.title}
              />
            ),
            headerShown: false,
            title: tab.title,
            headerStyle: { backgroundColor: colors.white },
            headerTitleStyle: { color: colors.primary600 },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabItem: {
    minWidth: 60, // tránh label bị bóp quá hẹp → xuống dòng
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    marginTop: 2,
    maxWidth: 80, // giới hạn hợp lý cho chữ dài
    textAlign: "center",
  },
});
