import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import Navbar from "../Components/Navbar";
import SubscribeNowSec from "../Components/Subscribe/SubscribeNowSec";
import { LinearGradient } from "expo-linear-gradient";

export default function Subscribe() {
  const [loaded] = useFonts({
    AkiraExpandedDemo: require("../../assets/fonts/Akira Expanded Demo.otf"),
  });

  if (!loaded) {
    return null;
  }
  const imgs = [
    require("../../assets/Mask Group.png"),
    require("../../assets/Mask Group.png"),
    require("../../assets/Mask Group.png"),
    require("../../assets/Mask Group.png"),
  ];
  const benefits = [
    {
      icon: require("../../assets/22.png"),
      text: "Wait To Read reduced to an hour instead of 3 hours.",
    },
    {
      icon: require("../../assets/22.png"),
      text: "3900 shards added each month.",
    },
    {
      icon: require("../../assets/22.png"),
      text: "10% off on all one-time shard pruchases.",
    },
    {
      icon: require("../../assets/22.png"),
      text: "No limits on Wait To Read.",
    },
  ];
  const totalWidth = imgs.length * (190 + 20);

  return (
    <View style={styles.subscriptionComp}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Image
            style={styles.ecllipse}
            source={require("../../assets/Ellipse 148.png")}
          />
          <Image
            style={styles.rightGem}
            source={require("../../assets/gemstones2 (1).png")}
          />
          <Image
            style={styles.leftGem}
            source={require("../../assets/gemstones2.png")}
          />
          <SubscribeNowSec />
        </View>
        <ScrollView
          contentContainerStyle={{
            ...styles.scrollContainer,
            width: totalWidth,
          }}
          horizontal={true}
        >
          <View style={styles.cardSec}>
            {imgs.map((el, ind) => (
              <Image key={ind} style={styles.cardImg} source={el} />
            ))}
          </View>
        </ScrollView>
        <View style={styles.benefits}>
          <View style={styles.getPerk}>
            <Text style={styles.getPerkTitle}>
              Alandal <Text style={styles.pinkClr}>+</Text>
            </Text>
            <Text style={styles.getPerkText}>
              <Text style={styles.pinkClr}>Exclusive</Text>
              {"\n"}
              Benefits
            </Text>
          </View>
          <View style={styles.benefitList}>
            {benefits.map((el, ind) => (
              <LinearGradient
                key={ind}
                colors={["rgba(214, 26, 76,1)", "rgba(214, 26, 76, 0.85)"]}
                style={styles.list}
              >
                <Image source={el.icon} style={styles.benefitIcon} />
                <Text style={styles.benefitText}>{el.text}</Text>
              </LinearGradient>
            ))}
          </View>
        </View>
        <View style={styles.subscribeSecTwo}>
          <Image
            style={styles.shadeImg}
            source={require("../../assets/Group 947390608.png")}
          />
          <View style={styles.subscribeSecBox}>
            <View style={styles.subscribeSecTwoTextArea}>
              <View style={styles.getPerk}>
                <Text style={styles.getPerkTitle}>
                  Alandal <Text style={styles.pinkClr}>+</Text>
                </Text>
                <Text style={styles.getPerkText}>
                  <Text style={styles.pinkClr}>Subscribe</Text>
                  {"\n"}
                  Now!
                </Text>
              </View>
              <Text style={styles.getPerkPara}>
                Where storytelling comes to life and reality fades away.
              </Text>
            </View>
            <View style={styles.subscribeBtnArea}>
              <TouchableOpacity>
                <LinearGradient
                  colors={[
                    "rgba(214, 26, 76, 0.95)",
                    "rgba(214, 26, 76, 0.75)",
                  ]}
                  style={styles.subscribeBtn}
                >
                  <Text style={styles.subscribeBtnText}>Subscribe Now!</Text>
                </LinearGradient>
              </TouchableOpacity>
              <Text style={styles.subscriptionPrice}>$9.99/ Monthly*</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  subscriptionComp: {
    position: "relative",
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  ecllipse: {
    width: "100%",
    position: "absolute",
    zIndex: 10,
  },
  rightGem: {
    position: "absolute",
    top: "45%",
    zIndex: 10,
  },
  leftGem: {
    right: 0,
    top: "15%",
    position: "absolute",
  },
  cardSec: {
    flexDirection: "row",
    height: 344,
    gap: 20,
    marginTop: 50,
    marginLeft: -105,
  },
  cardImg: {
    height: 344,
    width: 190,
  },
  benefits: { marginTop: 55, gap: 32, paddingHorizontal: 24, height: 494 },
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
    textShadowColor: "rgba(255, 255, 255, 0.16)",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 35,
  },
  pinkClr: {
    color: "rgba(214, 27, 76, 1)",
  },
  benefitList: {
    gap: 14,
    height: 350,
    borderRadius: 7,
  },
  list: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 16,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 7,
    gap: 16,
  },
  benefitText: {
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: -0.3,
    color: "#F8F8F8",
    width: 253,
  },
  subscribeSecTwo: {
    height: 330,
    position: "relative",
    marginHorizontal: 25,
    marginTop: 45,
    marginBottom: 55,
    borderWidth: 1,
    borderColor: "rgba(214, 27, 76, 1)",
    borderRadius: 8,
  },
  shadeImg: {
    position: "absolute",
    right: 0,
    width: 240,
    height: 330,
  },
  getPerkPara: {
    textAlign: "center",
    fontSize: 13,
    lineHeight: 20.6,
    width: 250,
    color: "#F8F8F8",
  },
  subscribeSecBox: {
    height: 253,
    gap: 15,
    marginHorizontal: 23,
    marginVertical: 39.5,
    paddingHorizontal: 9,
  },
  subscribeSecTwoTextArea: {
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  subscribeBtnArea: {
    alignItems: "center",
    gap: 12,
    height: 86,
  },
  subscribeBtn: {
    justifyContent: "center",
    alignItems: "center",
    height: 56,
    width: 295,
    backgroundColor: "white",
    borderRadius: 100,
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
});
