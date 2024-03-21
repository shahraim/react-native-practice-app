import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Navbar from "../Navbar";
import { useFonts } from "expo-font";
import BuyList from "./PurchaseSec/BuyList";

export default function Purchase() {
  const [loaded] = useFonts({
    AkiraExpandedDemo: require("../../../assets/fonts/Akira Expanded Demo.otf"),
  });

  if (!loaded) {
    return null;
  }

  const [selectedFaqIndex, setSelectedFaqIndex] = useState(0);

  const faqData = [
    {
      question: "What is Shards?",
      answer:
        "Shards are our virtual platform currency which can be used to unlock new chapters immediately without waiting.",
    },
    {
      question: "How long does it take to receive shards after purchase?",
      answer:
        "Shards are typically delivered instantly after purchase, but in some cases, it may take a few minutes to process.",
    },
    {
      question: "Are there any restrictions  on using shards?",
      answer:
        "Shards are typically delivered instantly after purchase, but in some cases, it may take a few minutes to process.",
    },
    {
      question: "What  is comics or novels should I read first?",
      answer:
        "Shards are typically delivered instantly after purchase, but in some cases, it may take a few minutes to process.",
    },
  ];

  const toggleFaqItem = (index) => {
    setSelectedFaqIndex(index);
  };

  return (
    <View style={styles.purchase}>
      <Navbar />
      <ScrollView>
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
            <BuyList />
          </View>

          <View style={styles.faqArea}>
            <Text style={styles.faqTitle}>Frequently Asked Questions</Text>
            <View style={styles.faqContainer}>
              {faqData.map((faq, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => toggleFaqItem(index)}
                >
                  <View
                    style={[
                      styles.faqItem,
                      selectedFaqIndex === index && styles.activeFaqItem,
                      selectedFaqIndex === index && { paddingVertical: 12 },
                    ]}
                  >
                    <View style={styles.faqQuestion}>
                      <Text style={styles.faqPoint}>?</Text>
                      <Text style={styles.faqQuestionText}>{faq.question}</Text>
                    </View>
                    {selectedFaqIndex === index && (
                      <Text style={styles.faqText}>{faq.answer}</Text>
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
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
    opacity: 0.2,
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
    marginTop: 40,
    marginHorizontal: 22,
    height: 470,
    position: "relative",
    justifyContent: "space-between",
  },
  purchaseSherds: {
    fontSize: 18,
    // lineHeight: 16,
    color: "#F8F8F8",
  },
  gemStoneSmall: {
    width: 85,
    height: 90,
    position: "absolute",
    right: -15,
    top: -40,
    opacity: 0.7,
  },
  flipHorizontal: {
    transform: [{ scaleX: -1 }],
  },

  faqArea: { marginHorizontal: 22, gap: 16, marginVertical: 30 },

  faqTitle: {
    fontSize: 18,
    color: "#F8F8F8",
  },
  faqContainer: {
    gap: 16,
  },
  faqItem: {
    backgroundColor: "#191919",
    borderRadius: 12,
    gap: 15,
    paddingHorizontal: 10,
    paddingVertical: 24,
  },
  activeFaqItem: {
    backgroundColor: "#2F2F2F",
  },
  faqPoint: {
    width: 18,
    height: 18,
    backgroundColor: "#D61A4C",
    color: "#FFFFFF",
    borderRadius: 100,
    textAlign: "center",
    fontSize: 10,
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  faqQuestion: {
    flexDirection: "row",
    gap: 8,
    width: 260,
    alignItems: "center",
  },
  faqQuestionText: {
    fontSize: 14,
    color: "#FFFFFF",
    lineHeight: 22,
  },
  faqText: {
    height: 58,
    fontSize: 14,
    lineHeight: 19.6,
    color: "#F8F8F8",
  },
});
