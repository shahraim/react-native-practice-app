import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import UserInformation from "./profileSection/UserInformation";
import ConfirmPassword from "./profileSection/ConfirmPassword";
import SocialMediaList from "../SocialMediaList";

export default function EditProfile() {
  const [isEnabled, setIsEnabled] = useState(true);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <View style={styles.editProfile}>
      <View style={styles.profileSection}>
        <Image
          style={styles.profileLogo}
          source={require("../../../assets/Group 947390572.png")}
        />
        <View style={styles.profileButtons}>
          <TouchableOpacity style={styles.buttonOne}>
            <Image
              style={styles.img}
              source={require("../../../assets/gallery-edit.png")}
            />
            <Text style={styles.buttonText}>Change Picture</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonTwo}>
            <Image
              style={styles.img}
              source={require("../../../assets/trash.png")}
            />
            <Text style={styles.buttonText}>Delete Picture</Text>
          </TouchableOpacity>
        </View>
      </View>
      <UserInformation />
      {/* Midline */}
      <View style={styles.midline}></View>
      {/* End Midline */}
      <ConfirmPassword />
      {/* Midline */}
      <View style={styles.midline}></View>
      {/* End Midline */}
      <View style={styles.autoUnlock}>
        <Text style={styles.autoUnlockText}>Enable Auto-Unlock</Text>
        <Text style={styles.autoUnlockPara}>
          Chapters will automatically unlock when you click the next button.
        </Text>
        <TouchableOpacity
          style={[styles.toggleButton, isEnabled && styles.toggleButtonOn]}
          onPress={toggleSwitch}
        >
          <View style={[styles.circle, isEnabled && styles.circleOn]} />
        </TouchableOpacity>
      </View>
      {/* Midline */}
      <View style={styles.midline}></View>
      {/* End Midline */}
      <View style={styles.autoUnlock}>
        <Text style={styles.autoUnlockText}>Delete your Account</Text>
        <Text style={styles.autoUnlockPara}>
          All your personal data will be deleted.
        </Text>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Delete Account</Text>
        </TouchableOpacity>
      </View>
      {/* Midline */}
      <View style={styles.midline}></View>
      {/* End Midline */}
      <SocialMediaList />
    </View>
  );
}

const styles = StyleSheet.create({
  editProfile: {
    paddingHorizontal: 22,
    paddingTop: 15,
    // paddingBottom: 200,
  },
  information: {
    gap: 24,
  },
  profileSection: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
  },
  profileLogo: {
    width: 103.06,
    height: 101.79,
  },
  profileButtons: {
    height: 70,
    width: 138,
    gap: 8,
  },
  buttonOne: {
    backgroundColor: "#D61A4C",
    flexDirection: "row",
    height: 32,
    width: 138,
    borderRadius: 35.5,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  buttonTwo: {
    backgroundColor: "rgba(116, 116, 116, 1)",
    flexDirection: "row",
    height: 32,
    width: 138,
    borderRadius: 35.5,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  img: {
    width: 16,
    height: 16,
  },
  buttonText: {
    color: "#FFF",
  },
  midline: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.09)",
    marginVertical: 24,
  },
  toggleButton: {
    width: 39,
    height: 21,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  toggleButtonOn: {
    backgroundColor: "#4353FF",
  },
  circle: {
    width: 15,
    height: 15,
    transform: [{ translateX: -10 }],
    borderRadius: 50,
    backgroundColor: "#292929",
  },
  circleOn: {
    transform: [{ translateX: 10 }],
  },
  autoUnlock: {
    // height: 103,
    // width: 302,
    gap: 13,
  },
  autoUnlockText: {
    fontSize: 18,
    lineHeight: 18,
    color: "#F8F8F8",
  },
  autoUnlockPara: {
    fontSize: 12,
    width: 302,
    lineHeight: 20,
    letterSpacing: 0.2,
    color: "#F8F8F8",
  },
  saveButton: {
    backgroundColor: "#D61A4C",
    borderRadius: 54,
    paddingVertical: 15,
    marginTop: 10,
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 18,
    lineHeight: 26,
    color: "#FFF",
  },
});

export { EditProfile };
