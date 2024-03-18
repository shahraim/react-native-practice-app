// SocialMediaList.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function SocialMediaList() {
  const socialMediaData = [
    {
      name: "Connect Facebook",
      icon: require("../../assets/Facebook.png"),
      username: "+",
    },
    {
      name: "Connect Twitter or X",
      icon: require("../../assets/Twitter.png"),
      username: "+",
    },
    {
      name: "Connect Discord",
      icon: require("../../assets/discord 1.png"),
      username: "+",
    },
    {
      name: "Connect Instagram",
      icon: require("../../assets/instagram 2.png"),
      username: "+",
    },
    {
      name: "Connect Spotify",
      icon: require("../../assets/spotify 2.png"),
      username: "+",
    },
  ];

  return (
    <View style={styles.socialMain}>
      <Text style={styles.sectionTitle}>Social Media</Text>
      <View style={styles.socialMediaItem}>
        {socialMediaData.map((item, index) => (
          <View style={styles.box} key={index}>
            <View style={styles.socialLogo}>
              <Image source={item.icon} style={styles.socialMediaIcon} />
              <Text style={styles.socialMediaName}>{item.name}</Text>
            </View>
            <Text style={styles.socialMediaUsername}>{item.username}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  socialMain: {
    marginBottom: 250,
    marginTop: 45,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F8F8F8",
    marginBottom: 12,
  },
  socialMediaItem: {
    height: 234,
    // width: 345,
    gap: 6,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#222222",
    height: 42,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  socialLogo: {
    flexDirection: "row",
    alignItems: "center",
  },
  socialMediaIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialMediaName: {
    fontSize: 12,
    color: "#F8F8F8",
    lineHeight: 14.4,
    letterSpacing: -0.2,
  },
  socialMediaUsername: {
    marginLeft: 10,
    fontSize: 14,
    color: "#777",
  },
});
