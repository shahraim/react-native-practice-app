import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Navbar from "../Components/Navbar";

export default function Subscribe() {
  const handleSubscribe = () => {
    // Add logic to handle subscription
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
            <Text style={styles.getPerkTitle}>Alandal +</Text>
            <Text style={styles.getPerkText}>Get Exclusive Perks</Text>
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
        <Text>Unlock the realms of imagination</Text>
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
  },
  getPerkTitle: {
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0.0,
    // akira expanded font family
    // weight super bold
  },
  getPerkText: {
    textAlign: "center",
    fontSize: 32,
    lineHeight: 38,
    letterSpacing: 0.8,
    width: 261,
    // akira expanded font family
    // weight super bold
  },
  getPerkPara: {
    textAlign: "center",
    fontSize: 13,
    lineHeight: 20.6,
  },
  subscribeBtnArea: {
    alignItems: "center",
  },
  subscribeBtn: {
    backgroundColor: "#D61A4C",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  subscribeBtnText: {
    color: "#FFF",
    fontSize: 18,
  },
  subscriptionPrice: {
    fontSize: 16,
  },
});
