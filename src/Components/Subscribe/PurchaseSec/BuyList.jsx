import React, { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function BuyList() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleBuyPress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.buyListContainer}>
      <View style={styles.buyList}>
        <View style={styles.offerList}>
          <Text style={styles.offerListText}>one time offer </Text>
        </View>
        <View style={styles.buyDiv}>
          <View style={styles.buyImgOffer}>
            <Image
              style={styles.buyImg}
              source={require("../../../../assets/gemstones2 (2).png")}
            />
            <View style={styles.buyOffer}>
              <Text style={styles.buyOfferText}>13,700</Text>
              <Text style={styles.buyOfferPoint}>+2500</Text>
            </View>
          </View>
          <Text style={styles.buyPrice}>$19.99</Text>
          <TouchableOpacity style={styles.buyBtn} onPress={handleBuyPress}>
            <Text style={styles.buyBtnText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buyList}>
        <View style={styles.buyDiv}>
          <View style={styles.buyImgOffer}>
            <Image
              style={styles.buyImg}
              source={require("../../../../assets/gemstones2 (3).png")}
            />
            <View style={styles.buyOffer}>
              <Text style={styles.buyOfferText}>3000</Text>
            </View>
          </View>
          <Text style={styles.buyPrice}>$4.99</Text>
          <TouchableOpacity style={styles.buyBtn}>
            <Text style={styles.buyBtnText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buyList}>
        <View style={styles.offerListPopular}>
          <Text style={styles.offerListText}>popular</Text>
        </View>
        <View style={styles.buyDiv}>
          <View style={styles.buyImgOffer}>
            <Image
              style={styles.buyImg}
              source={require("../../../../assets/gemstones2 (4).png")}
            />
            <View style={styles.buyOffer}>
              <Text style={styles.buyOfferText}>3000</Text>
            </View>
          </View>
          <Text style={styles.buyPrice}>$4.99</Text>
          <TouchableOpacity style={styles.buyBtn}>
            <Text style={styles.buyBtnText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buyList}>
        <View style={styles.buyDiv}>
          <View style={styles.buyImgOffer}>
            <Image
              style={styles.buyImg}
              source={require("../../../../assets/gemstones2 (7).png")}
            />
            <View style={styles.buyOffer}>
              <Text style={styles.buyOfferText}>13,700</Text>
            </View>
          </View>
          <Text style={styles.buyPrice}>$19.99</Text>
          <TouchableOpacity style={styles.buyBtn}>
            <Text style={styles.buyBtnText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buyList}>
        <View style={styles.buyDiv}>
          <View style={styles.buyImgOffer}>
            <Image
              style={styles.buyImg}
              source={require("../../../../assets/gemstones2 (5).png")}
            />
            <View style={styles.buyOffer}>
              <Text style={styles.buyOfferText}>32,500</Text>
            </View>
          </View>
          <Text style={styles.buyPrice}>$49.99</Text>
          <TouchableOpacity style={styles.buyBtn}>
            <Text style={styles.buyBtnText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buyList}>
        <View style={styles.buyDiv}>
          <View style={styles.buyImgOffer}>
            <Image
              style={styles.buyImg}
              source={require("../../../../assets/gemstones2 (6).png")}
            />
            <View style={styles.buyOffer}>
              <Text style={styles.buyOfferText}>70,000</Text>
            </View>
          </View>
          <Text style={styles.buyPrice}>$99.99</Text>
          <TouchableOpacity style={styles.buyBtn}>
            <Text style={styles.buyBtnText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <View style={styles.modalHeadSec}>
                <View style={styles.infoHead}>
                  <Image
                    style={styles.infoHeadImg}
                    source={require("../../../../assets/gemstones2 (3).png")}
                  />
                  <Text style={styles.infoText}>3,000</Text>
                </View>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <FontAwesome5 name="times" size={14} color="white" />
                </TouchableOpacity>
              </View>
              <Text style={styles.modalHeadText}>
                You are about to buy{" "}
                <Text style={{ fontWeight: "bold", color: "#f8f8f8" }}>
                  3,000 hards
                </Text>
              </Text>
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.sideLeft}>Price</Text>
              <Text style={styles.sideright}>$4.99</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.sideLeft}>Discount</Text>
              <Text style={styles.sideright}>-10%</Text>
            </View>
            <View style={styles.priceContainerTotal}>
              <Text style={styles.sideLeft}>Total</Text>
              <Text style={styles.sideright}>$4.49</Text>
            </View>
            <TouchableOpacity style={styles.payButton}>
              <Text style={styles.payButtonText}>
                Pay with{" "}
                <Text style={{ fontSize: 24 }}>
                  <FontAwesome5 name="apple" size={20} color="black" /> Pay
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  buyListContainer: {
    gap: 4,
    height: 440,
  },
  buyList: {
    height: 70,
    backgroundColor: "#1B1B1B",
    borderRadius: 12,
    position: "relative",
    alignItems: "center",
  },
  offerList: {
    height: 16,
    width: 80,
    backgroundColor: "#D61B4C",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    top: 0,
  },
  offerListPopular: {
    height: 16,
    width: 47,
    backgroundColor: "#FF404A",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    top: 0,
  },
  offerListText: {
    fontSize: 9,
    lineHeight: 14.8,
    color: "#fff",
  },
  buyDiv: {
    marginHorizontal: 10.5,
    marginVertical: 9.11,
    height: 51.78,
    gap: 28,
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },
  buyPrice: {
    fontSize: 16,
    lineHeight: 54,
    color: "#F8F8F8",
    width: 57,
  },
  buyBtn: {
    backgroundColor: "#D61A4C",
    borderRadius: 200,
    height: 40,
    width: 85,
    justifyContent: "center",
    alignItems: "center",
  },
  buyBtnText: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.28,
    color: "#ffffff",
  },
  buyImgOffer: {
    flexDirection: "row",
    alignItems: "center",
    width: 140,
    gap: 19,
  },
  buyOffer: {
    height: 51,
    gap: 8,
    justifyContent: "center",
    // alignItems: "center",
  },
  buyOfferText: {
    fontSize: 16,
    color: "#F8F8F8",
  },
  buyOfferPoint: {
    backgroundColor: "#D61A4C",
    // height: 24,
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 200,
    fontSize: 12,
    lineHeight: 24,
    color: "#ffffff",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalView: {
    backgroundColor: "#131313",
    borderRadius: 12,
    padding: 35,
    height: 321,
    width: 377,
    elevation: 5,
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 40,
    gap: 16,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 18,
  },
  priceContainerTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 42,
    borderTopWidth: 1,
    paddingTop: 12,
    borderBottomWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
  payButton: {
    backgroundColor: "#ffffff",
    height: 56,
    borderRadius: 100,
    elevation: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  payButtonText: {
    color: "black",
    fontSize: 16,
  },
  sideLeft: {
    color: "#ADADB1",
  },
  sideright: {
    color: "#f8f8f8",
  },
  modalHeader: {
    height: 71,
    gap: 24,
  },
  modalHeadSec: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 29,
  },
  modalHeadText: {
    fontSize: 13,
    lineHeight: 20.6,
    height: 18,
    color: "#ADADB1",
  },
  infoHead: {
    flexDirection: "row",
    height: 29,
    width: 95,
    gap: 2,
    alignItems: "center",
  },
  infoHeadImg: { height: 29, width: 31 },
  infoText: { fontSize: 16, color: "#F8F8F8" },
  closeButton: {
    height: 20,
    width: 20,
  },
});
