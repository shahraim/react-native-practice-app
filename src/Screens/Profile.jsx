import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Navbar from "../Components/Navbar";
import EditProfile from "../Components/Profile/EditProfile";
import Billing from "../Components/Profile/Billing";
import Subscription from "../Components/Profile/Subscription";
import MainProfile from "../Components/Profile/MainProfile";
import { FontAwesome } from "@expo/vector-icons";

export default function Profile() {
  const [active, setActive] = useState("profile");
  const [isEditProfileVisible, setIsEditProfileVisible] = useState(false);

  const toggleEditProfile = () => {
    setIsEditProfileVisible(!isEditProfileVisible);
  };
  const handleBack = () => {
    setIsEditProfileVisible(false);
  };

  return (
    <>
      {!isEditProfileVisible && <Navbar />}
      {isEditProfileVisible && (
        <View style={styles.backContainer}>
          <TouchableOpacity onPress={handleBack}>
            <View style={styles.backBorder}>
              <FontAwesome
                name="angle-left"
                size={25}
                color="rgba(255,255,255,0.8)"
              />
            </View>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.profile}>
        <ScrollView>
          <View style={styles.profileBar}>
            <TouchableOpacity
              onPress={() => setActive("profile")}
              style={[
                styles.textBar,
                active === "profile" && styles.textBarActive,
              ]}
            >
              <Text
                style={
                  active === "profile"
                    ? styles.profileTextActive
                    : styles.profileText
                }
              >
                Profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setActive("billing");
                setIsEditProfileVisible(false);
              }}
              style={[
                styles.textBar,
                active === "billing" && styles.textBarActive,
              ]}
            >
              <Text
                style={
                  active === "billing"
                    ? styles.profileTextActive
                    : styles.profileText
                }
              >
                Billing
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setActive("subscription");
                setIsEditProfileVisible(false);
              }}
              style={[
                styles.textBar,
                active === "subscription" && styles.textBarActive,
              ]}
            >
              <Text
                style={
                  active === "subscription"
                    ? styles.profileTextActive
                    : styles.profileText
                }
              >
                Subscription
              </Text>
            </TouchableOpacity>
          </View>
          <MainProfile
            active={active}
            isEditProfileVisible={isEditProfileVisible}
            toggleEditProfile={toggleEditProfile}
          />

          {active === "profile" && isEditProfileVisible && <EditProfile />}
          {active === "billing" && <Billing />}
          {active === "subscription" && <Subscription />}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  backContainer: {
    height: 67.58,
  },
  backBorder: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.29)",
    borderRadius: 23.5,
    marginTop: 15,
    marginHorizontal: 20,
  },

  profile: {
    backgroundColor: "#131313",
    height: "100%",
    color: "#F8F8F8",
  },
  profileBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#1E1E1E",
    marginTop: 30,
    marginHorizontal: 20,
  },
  profileText: {
    fontSize: 16,
    color: "#ADADB1",
  },
  profileTextActive: {
    fontSize: 16,
    color: "#F8F8F8",
  },
  textBar: {
    flex: 1,
    height: 28,
    alignItems: "center",
  },
  textBarActive: {
    color: "red",
    borderBottomWidth: 1,
    borderBottomColor: "#D61A4C",
  },
});
