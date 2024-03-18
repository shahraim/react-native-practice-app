import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default function Billing() {
  const transactions = [
    {
      name: "HSBC",
      endingIN: "Master Card ending in *********456",
      point: "-30",
      pointCoinImg: require("../../../assets/image 82.png"),
      image: require("../../../assets/image 16.png"),
    },
    {
      name: "HSBC",
      endingIN: "Master Card ending in *********456",
      point: "35",
      pointCoinImg: require("../../../assets/image 82.png"),
      image: require("../../../assets/Group.png"),
    },
    {
      name: "HSBC",
      endingIN: "Master Card ending in *********456",
      point: "35",
      pointCoinImg: require("../../../assets/image 82.png"),
      image: require("../../../assets/Group.png"),
    },
    {
      name: "HSBC",
      endingIN: "Master Card ending in *********456",
      point: "35",
      pointCoinImg: require("../../../assets/image 82.png"),
      image: require("../../../assets/Group.png"),
    },
    {
      name: "HSBC",
      endingIN: "Master Card ending in *********456",
      point: "-30",
      pointCoinImg: require("../../../assets/image 82.png"),
      image: require("../../../assets/image 16.png"),
    },
    {
      name: "HSBC",
      endingIN: "Master Card ending in *********456",
      point: "-30",
      pointCoinImg: require("../../../assets/image 82.png"),
      image: require("../../../assets/image 16.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transaction History</Text>
      <View style={{ gap: 8 }}>
        {transactions.map((transaction, index) => (
          <View key={index} style={styles.transactionItem}>
            <View style={styles.imageContainer}>
              <Image source={transaction.image} style={styles.image} />
              <View>
                <Text style={styles.name}>{transaction.name}</Text>
                <Text style={styles.endingIN}>{transaction.endingIN}</Text>
              </View>
            </View>
            <View style={styles.pointContainer}>
              <Text
                style={[
                  styles.point,
                  {
                    color: transaction.point.startsWith("-") ? "red" : "white",
                  },
                ]}
              >
                {transaction.point}
              </Text>
              <Image
                source={transaction.pointCoinImg}
                style={styles.pointCoinImg}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
    paddingTop: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  transactionItem: {
    backgroundColor: "#242424",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 10,
    // gap: 110,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 170,
  },
  image: {
    width: 33.76,
    height: 32,
    marginRight: 10,
    objectFit: "contain",
  },
  name: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 14,
  },
  endingIN: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 12,
    lineHeight: 16,
  },
  pointContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  point: {
    fontSize: 14,
    letterSpacing: 0.3,
    marginRight: 5,
  },
  pointCoinImg: {
    width: 17,
    height: 17,
  },
});
