import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import CheckBox from "../CheckBox";
import SocialMediaList from "../SocialMediaList";

export default function MainProfile({
  active,
  isEditProfileVisible,
  toggleEditProfile,
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dropdownIcon, setDropdownIcon] = useState("keyboard-arrow-up");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [bookmark, setBookmark] = useState(true);

  const handleDateChange = (event, date) => {
    if (event.type === "set") {
      setSelectedDate(date || selectedDate);
    }
    setShowDatePicker(false);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    setDropdownIcon(
      isModalVisible ? "keyboard-arrow-down" : "keyboard-arrow-up"
    );
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    toggleModal();
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      {active === "profile" && !isEditProfileVisible && (
        <View style={styles.mainProfile}>
          <View style={styles.infoSec}>
            <View style={styles.personImg}>
              <Image
                style={styles.profileLogo}
                source={require("../../../assets/Group 947390572.png")}
              />
              <View style={styles.personName}>
                <Text style={styles.profileName}>Zoe Towne</Text>
                <Text style={styles.profileUserName}>USERNAME</Text>
              </View>
              <TouchableOpacity
                onPress={toggleEditProfile}
                style={styles.editBtn}
              >
                <Text style={styles.editBtnText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.personalInfo}>
              <View style={styles.dropdown}>
                <Text style={styles.dropdownLabel}>Gender</Text>
                <TouchableOpacity
                  onPress={toggleModal}
                  style={styles.dropdownContainer}
                >
                  <Text style={styles.dropdownText}>
                    {selectedGender || "Select Gender"}
                  </Text>
                  <MaterialIcons
                    name={dropdownIcon}
                    size={16}
                    color="white"
                    style={styles.dropdownIcon}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.dropdown}>
                <Text style={styles.dropdownLabel}>Birthday</Text>
                <TouchableOpacity
                  onPress={() => setShowDatePicker(!showDatePicker)}
                  style={styles.dropdownContainer}
                >
                  <Text style={styles.dropdownText}>
                    {selectedDate.toLocaleDateString() || "Select Date"}
                  </Text>
                </TouchableOpacity>
              </View>
              {showDatePicker && (
                <View style={styles.datePickerContainer}>
                  <DateTimePicker
                    value={selectedDate}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                  />
                </View>
              )}
              <View>
                <Text style={styles.dropdownLabel}>Biography</Text>
                <TextInput multiline={true} style={styles.bioText} />
              </View>
              <View>
                <CheckBox
                  onPress={() => setBookmark(!bookmark)}
                  title="Hide bookmarks from public"
                  isChecked={bookmark}
                />
              </View>
            </View>
          </View>
          <SocialMediaList />
        </View>
      )}
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => handleGenderSelect("Male")}>
              <Text style={styles.modalOption}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGenderSelect("Female")}>
              <Text style={styles.modalOption}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleGenderSelect("Other")}>
              <Text style={styles.modalOption}>Other</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleModal} style={styles.modalBtn}>
              <Text style={styles.modalBtnText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  infoSec: {
    gap: 20,
  },
  mainProfile: {
    marginTop: 35,
    paddingHorizontal: 22,
  },
  personImg: {
    gap: 14,
    alignItems: "center",
  },
  profileLogo: {
    width: 119.48,
    height: 118,
  },
  personName: {
    alignItems: "center",
    gap: -5,
  },
  profileName: {
    fontSize: 24,
    lineHeight: 26,
    letterSpacing: 0.36,
    color: "#F8F8F8",
  },
  profileUserName: {
    fontSize: 10,
    lineHeight: 26,
    letterSpacing: -0.36,
    color: "#F8F8F8",
  },
  editBtn: {
    backgroundColor: "#D61A4C",
    height: 31,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 30.24,
  },
  editBtnText: {
    height: 17,
    fontSize: 10,
    lineHeight: 16.4,
    letterSpacing: -0.23,
    color: "#FFFFFF",
  },
  dropdownContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#101010",
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 42,
  },
  dropdownText: {
    fontSize: 12,
    lineHeight: 26,
    letterSpacing: -0.36,
    color: "#FFFFFF",
  },
  dropdownIcon: {},
  dropdownLabel: {
    color: "#F8F8F8",
    fontSize: 10,
    lineHeight: 26,
    letterSpacing: -0.36,
    paddingLeft: 9,
    textTransform: "uppercase",
  },
  personalInfo: {
    marginTop: 15,
    gap: 8,
  },
  modalContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "100%",
    backgroundColor: "#131313",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalOption: {
    fontSize: 18,
    textAlign: "center",
    color: "#f8f8f8",
    marginBottom: 10,
  },
  modalBtn: {
    backgroundColor: "#D61A4C",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
  },
  modalBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  bioText: {
    height: 110,
    backgroundColor: "#101010",
    borderRadius: 16,
    color: "#F8F8F8",
    fontSize: 12,
    letterSpacing: -0.36,
    lineHeight: 20,
    paddingLeft: 22,
    paddingRight: 6,
    paddingVertical: 10,
    textAlignVertical: "top",
  },
});
