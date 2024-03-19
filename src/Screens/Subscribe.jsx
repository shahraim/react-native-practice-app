import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Navbar from "../Components/Navbar";
import { useFonts } from "expo-font";

export default function Subscribe() {
  const [loaded] = useFonts({
    AkiraExpandedDemo: require("../../assets/fonts/Akira Expanded Demo.otf"),
  });

  if (!loaded) {
    return null;
  }
  const handleSubscribe = () => {
    console.log("Subscribed!");
  };

  return (
    <View style={styles.subscriptionComp}>
      <Navbar />
      <Image
        style={styles.ecllipse}
        source={require("../../assets/Ellipse 148.png")}
      />
      <View style={styles.subscribeSec}>
        {/*  */}
        <View style={styles.exclusivePerk}>
          <View style={styles.getPerk}>
            <Text style={styles.getPerkTitle}>
              Alandal <Text style={styles.pinkClr}>+</Text>
            </Text>
            <Text style={styles.getPerkText}>
              Get
              {"\n"}
              <Text style={styles.pinkClr}>Exclusive</Text>
              {"\n"}
              Perks
            </Text>
          </View>

          <Text style={styles.getPerkPara}>
            Escape Reality and dive into our ever-growing collection of
            exclusive comics and novels.
          </Text>
        </View>
        {/*  */}
        <View style={styles.subscribeBtnArea}>
          <TouchableOpacity
            style={styles.subscribeBtn}
            onPress={handleSubscribe}
          >
            <Text style={styles.subscribeBtnText}>Subscribe Now!</Text>
          </TouchableOpacity>
          <Text style={styles.subscriptionPrice}>$9.99/ Monthly*</Text>
        </View>
        {/*  */}
        <Text style={styles.unlockRealms}>
          Unlock the realms of imagination
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subscriptionComp: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  ecllipse: {
    width: "100%",
    position: "absolute",
  },
  subscribeSec: {
    height: 467,
    marginTop: 50,
    marginHorizontal: 48,
    gap: 40,
    alignItems: "center",
  },
  exclusivePerk: {
    alignItems: "center",
    paddingHorizontal: 2,
    height: 196,
    width: 265,
    gap: 10,
  },
  getPerk: {
    alignItems: "center",
    gap: 16,
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
    fontSize: 32,
    lineHeight: 38,
    letterSpacing: 0.8,
    width: 261,
    fontFamily: "AkiraExpandedDemo",
    color: "#FFFFFF",
  },
  getPerkPara: {
    textAlign: "center",
    fontSize: 13,
    lineHeight: 20.6,
    color: "#F8F8F8",
  },
  subscribeBtnArea: {
    alignItems: "center",
    gap: 12,
    height: 86,
  },
  subscribeBtn: {
    backgroundColor: "rgba(214, 26, 76, 1)",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  subscribeBtnText: {
    color: "#F8F8F8",
    fontSize: 16,
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  subscriptionPrice: {
    fontSize: 13,
    lineHeight: 20.6,
    color: "#F8F8F8",
  },
  pinkClr: {
    color: "rgba(214, 27, 76, 1)",
  },
  unlockRealms: {
    color: "#FFFFFF",
    fontSize: 24,
    lineHeight: 38,
    letterSpacing: 0.8,
    fontFamily: "AkiraExpandedDemo",
  },
});
