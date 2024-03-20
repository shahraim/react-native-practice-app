import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Navbar from "../Navbar";
import { useFonts } from "expo-font";

export default function Purchase() {
  const [loaded] = useFonts({
    AkiraExpandedDemo: require("../../../assets/fonts/Akira Expanded Demo.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.purchase}>
      <Navbar />
      <View style={styles.purchaseSec}>
        <Image
          style={styles.gemStoneBack}
          source={require("../../../assets/gemstones3.png")}
        />
        <View style={styles.getPerk}>
          <Text style={styles.getPerkText}>
            escape
            {"\n"}
            <Text style={styles.pinkClr}>reality</Text>
          </Text>
          <Text style={styles.purchasePara}>
            Unlock Action-Packed Chapters!
          </Text>
        </View>
        <View style={styles.buyArea}>
          <Text style={styles.purchaseSherds}>Purchase Shards</Text>
          <Image
            style={[styles.gemStoneSmall, styles.flipHorizontal]}
            source={require("../../../assets/gemstones3.png")}
          />
          <View style={styles.buyList}>{/* buy list  */}</View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  purchase: {
    backgroundColor: "#131313",
    height: "100%",
    position: "relative",
  },
  gemStoneBack: {
    position: "absolute",
    opacity: 0.3,
    right: 0,
    top: -15,
    width: 315.53,
    height: 306.82,
  },
  getPerk: {
    alignItems: "center",
    gap: 10,
  },
  purchaseSec: {
    marginTop: 15,
  },
  getPerkTitle: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.0,
    fontFamily: "AkiraExpandedDemo",
    color: "#FFFFFF",
  },
  getPerkText: {
    textAlign: "center",
    fontSize: 37,
    lineHeight: 33,
    letterSpacing: 0.8,
    width: 261,
    fontFamily: "AkiraExpandedDemo",
    color: "#FFFFFF",
    textShadowColor: "rgba(255, 255, 255, 0.16)",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 35,
  },
  pinkClr: {
    color: "rgba(214, 27, 76, 1)",
  },
  purchasePara: {
    fontSize: 13,
    lineHeight: 20.6,
    color: "#F8F8F8",
  },
  buyArea: {
    marginTop: 30,
    marginHorizontal: 22,
    height: 470,
    position: "relative",
    backgroundColor: "red",
    justifyContent: "center",
  },
  purchaseSherds: {
    fontSize: 18,
    // lineHeight: 16,
    color: "#F8F8F8",
  },
  gemStoneSmall: {
    width: 95,
    height: 91,
    position: "absolute",
    right: 0,
    top: -10,
  },
  flipHorizontal: {
    transform: [{ scaleX: -1 }],
  },
  buyList: {
    backgroundColor: "green",
    height: 440,
  },
});
