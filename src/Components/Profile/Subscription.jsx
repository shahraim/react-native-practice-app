import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";
import SubscribeModal from "../SubscribeModal";
import ConfirmModal from "../ConfirmModal";

export default function Subscription() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSecondModalVisible, setIsSecondModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleSecondModal = () => {
    setIsSecondModalVisible(!isSecondModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Manage Novel Subscriptions</Text>
        <Text style={styles.headPara}>
          Manage and view all your Monarch subscriptions in one place.
        </Text>
      </View>
      <View style={styles.subscriptionItem}>
        <View style={styles.itemContent}>
          <Image
            source={require("../../../assets/fEfKYn3A662tsC1irmZh34OianDKce-metaMzMzIGNvcHkucG5n- 2.png")}
            style={styles.image}
          />
          <Text style={styles.itemText}>
            The Record of a Thousand Lives is a Human In Human
          </Text>
        </View>
        <TouchableOpacity style={styles.option} onPress={toggleSecondModal}>
          <Text style={styles.dot}></Text>
          <Text style={styles.dot}></Text>
          <Text style={styles.dot}></Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subscribeModalSec}>
        <View style={styles.secHead}>
          <Text style={styles.headerText}>Manage Alandal+ Subscription</Text>
          <Text style={styles.headPara}>
            Manage and view all your Monarch subscription in one place.
          </Text>
        </View>
        <LinearGradient
          colors={["#242424", "#1B1B1B"]}
          style={styles.subscribeBox}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.alandalText}>
            <Text style={styles.alandalTextHead}>Alandal+</Text>
            <Text style={styles.alandalTextPara}>
              Escape reality and dive into our ever-growing collection of
              exclusive comics and novels.
            </Text>
          </View>
          <View style={styles.startedArea}>
            <View style={styles.startedAreaDetail}>
              <Text style={styles.startedon}>Started On</Text>
              <View style={styles.startedonInput}>
                <Text style={styles.startedonInputText}>December 1, 2023</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.startedAreaBtn}
              onPress={toggleModal}
            >
              <Text style={styles.startedAreaBtnText}>Unsubscribe</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
      <SubscribeModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        toggleModal={toggleModal}
      />
      <ConfirmModal
        isSecondModalVisible={isSecondModalVisible}
        setIsSecondModalVisible={setIsSecondModalVisible}
        toggleSecondModal={toggleSecondModal}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
    paddingTop: 20,
  },
  header: {
    height: 66,
    gap: 12,
    marginBottom: 24,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#F8F8F8",
  },
  headPara: {
    fontSize: 14,
    lineHeight: 18.6,
    width: 331,
    color: "rgba(255,255,255,0.4)",
  },
  subscriptionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#242424",
    height: 67,
    borderRadius: 12,
    paddingLeft: 12,
    justifyContent: "space-between",
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 32.23,
    height: 43,
    marginRight: 10,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 12,
    width: 200,
    letterSpacing: 0.2,
    lineHeight: 17,
    color: "#FFFFFF",
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 30,
    backgroundColor: "#ffffff",
  },
  secHead: { paddingHorizontal: 12 },
  subscribeModalSec: {
    marginTop: 10,
    paddingTop: 24,
    paddingBottom: 12,
    gap: 19,
  },
  subscribeBox: {
    height: 276,
    borderRadius: 5,
    padding: 22,
    gap: 24,
  },
  alandalText: {
    height: 82,
    gap: 12,
  },
  alandalTextHead: {
    fontSize: 18,
    lineHeight: 16,
    color: "#D61A4C",
  },
  alandalTextPara: {
    fontSize: 14,
    lineHeight: 18.6,
    height: 54,
    width: 256,
    color: "rgba(255,255,255,0.5)",
  },
  startedArea: {
    height: 121,
    gap: 16,
  },
  startedAreaDetail: {
    gap: 12,
    height: 69,
  },
  startedon: {
    fontSize: 14,
    lineHeight: 18.6,
    color: "#F8F8F8",
    textTransform: "uppercase",
  },
  startedonInput: {
    backgroundColor: "#131313",
    borderRadius: 12,
    height: 40,
    justifyContent: "center",
  },
  startedonInputText: {
    fontSize: 18,
    paddingHorizontal: 12,
    color: "#808080",
  },
  startedAreaBtn: {
    paddingHorizontal: 10,
    height: 36,
    backgroundColor: "#979797",
    width: 94,
    borderRadius: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  startedAreaBtnText: {
    color: "#FFFFFF",
  },
  option: {
    height: "100%",
    width: 30,
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
