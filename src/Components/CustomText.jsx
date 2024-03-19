import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function CustomText() {
  const [loaded] = useFonts({
    AkiraExpandedDemo: require("../../assets/fonts/Akira Expanded Demo.otf"),
  });

  if (!loaded) {
    return null; // You can return a loading indicator here if needed
  }

  return <Text style={styles.text}>Hello, world!</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "AkiraExpandedDemo",
    fontSize: 16,
  },
});
