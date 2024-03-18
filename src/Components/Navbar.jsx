import { Image, StyleSheet, Text, View } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.nav}>
      <Image
        style={styles.logoNav}
        source={require("../../assets/Group 947390494.png")}
      />
      <Image
        style={styles.logoIcon}
        source={require("../../assets/Group 947390584.png")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  nav: {
    // width: 393,
    height: 67.58,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingLeft: 22,
    paddingRight: 22,
  },
  logoNav: { width: 102, height: 23 },
  logoIcon: { width: 38, height: 35.58 },
});
