import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Navbar() {
  const navigation = useNavigation();

  const handleLogoIconPress = () => {
    navigation.navigate("Profile");
  };
  const handleLogoIconSubscribe = () => {
    navigation.navigate("Subscribe");
  };

  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={handleLogoIconSubscribe}>
        <Image
          style={styles.logoNav}
          source={require("../../assets/Group 947390494.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogoIconPress}>
        <Image
          style={styles.logoIcon}
          source={require("../../assets/Group 947390584.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    height: 67.58,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingLeft: 22,
    paddingRight: 22,
    backgroundColor: "#131313",
  },
  logoNav: { width: 102, height: 23 },
  logoIcon: { width: 38, height: 35.58 },
});
