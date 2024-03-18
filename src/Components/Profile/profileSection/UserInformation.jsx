import React, { useState } from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import CheckBox from "../../CheckBox";

export default function UserInformation() {
  const [dropdownIcon, setDropdownIcon] = useState("keyboard-arrow-up");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const [username, setUsername] = useState();
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isBirthdayFocused, setIsBirthdayFocused] = useState(false);
  const [birthday, setBirthday] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [bio, setBio] = useState("");
  const [isBioFocused, setIsBioFocused] = useState(false);
  const [bookmark, setBookmark] = useState(true);

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
  const handleBioFocus = () => {
    setIsBioFocused(true);
  };

  const handleBioBlur = (value) => {
    setIsBioFocused(!!value);
  };
  const handleUsernameFocus = () => {
    setIsUsernameFocused(true);
  };

  const handleUsernameBlur = (value) => {
    setIsUsernameFocused(!!value);
  };

  const handleBirthdayFocus = () => {
    setIsBirthdayFocused(true);
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setBirthday(selectedDate);
    }
  };
  return (
    <View style={styles.information}>
      <View style={styles.inputSection}>
        <View style={styles.inputBox}>
          <Image
            style={styles.inputIcon}
            source={require("../../../../assets/Edit - 2.png")}
          />
          <Text
            style={[styles.inputLabel, isUsernameFocused && styles.labelTop]}
          >
            UserName
          </Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#777"
            onFocus={handleUsernameFocus}
            onBlur={() => handleUsernameBlur(username)}
            onChangeText={(value) => setUsername(value)}
          />
        </View>

        <TouchableOpacity onPress={toggleModal} style={styles.inputBoxGender}>
          <Text style={styles.dropdownText}>{selectedGender || "Gender"}</Text>
          <MaterialIcons
            name={dropdownIcon}
            size={16}
            color="white"
            style={styles.dropdownIcon}
          />
        </TouchableOpacity>

        <View>
          <Image
            style={styles.inputIcon}
            source={require("../../../../assets/calendar-2.png")}
          />
          <TouchableOpacity
            onPress={handleBirthdayFocus}
            style={styles.inputBox}
          >
            <Text
              style={[
                styles.inputLabel,
                (isBirthdayFocused || birthday.toString().length > 0) &&
                  styles.labelTop,
              ]}
            >
              Birthday
            </Text>

            <Text style={styles.birthdayInput}>{birthday.toDateString()}</Text>
            <MaterialIcons
              name={dropdownIcon}
              size={16}
              color="white"
              style={styles.dropdownIcon}
            />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={birthday}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>
      </View>
      <View style={styles.bio}>
        <Text style={styles.bioText}>Biography</Text>
        <TextInput
          style={[styles.input, styles.biographyInput]}
          multiline={true}
          onFocus={handleBioFocus}
          onBlur={() => handleBioBlur(bio)}
          onChangeText={(value) => setBio(value)}
        />
      </View>

      <View style={styles.preview}>
        <CheckBox
          onPress={() => setBookmark(!bookmark)}
          title="Hide bookmarks from public"
          isChecked={bookmark}
        />
        <TouchableOpacity style={styles.previewBtn}>
          <Text style={styles.previewText}>Preview</Text>
          <MaterialIcons name="chevron-right" size={15} color="#C7C7C7" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>

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
    </View>
  );
}

const styles = StyleSheet.create({
  information: {
    gap: 24,
  },
  inputSection: {
    gap: 20,
    height: 210,
  },
  input: {
    paddingLeft: 50,
    fontSize: 14,
    lineHeight: 20.7,
    color: "#C7C7C7",
  },
  biographyInput: {
    height: 100,
    textAlignVertical: "top",
  },
  saveButton: {
    backgroundColor: "#D61A4C",
    borderRadius: 54,
    paddingVertical: 15,
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 18,
    lineHeight: 26,
    color: "#FFF",
  },
  inputBox: {
    position: "relative",
    height: 56,
    borderRadius: 84,
    backgroundColor: "#131313",
    borderWidth: 1,
    borderColor: "#30323D",
    justifyContent: "center",
  },
  inputBoxGender: {
    position: "relative",
    height: 56,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#131313",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 84,
    borderColor: "#30323D",
    paddingLeft: 25,
    paddingRight: 20,
  },
  inputLabel: {
    position: "absolute",
    top: "34%",
    left: 50,
    zIndex: 10,
    color: "#C7C7C7",
    fontSize: 14,
    lineHeight: 20.7,
  },
  inputIcon: {
    position: "absolute",
    top: 15,
    zIndex: 1,
    left: 15,
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
  dropdownText: {
    fontSize: 14,
    lineHeight: 20.7,
    color: "#C7C7C7",
  },
  dropdownIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  labelTop: {
    top: -10,
    left: 20,
    backgroundColor: "#131313",
    paddingHorizontal: 5,
  },
  birthdayInputWrapper: {
    position: "relative",
    flex: 1,
    justifyContent: "center",
  },
  birthdayInput: {
    paddingLeft: 50,
    fontSize: 14,
    lineHeight: 20.7,
    color: "#C7C7C7",
  },
  bio: {
    height: 107,
    borderWidth: 1,
    borderColor: "#30323D",
    borderRadius: 14,
    position: "relative",
  },
  biographyInput: {
    height: "auto",
    paddingVertical: 15,
    paddingLeft: 25,
    paddingRight: 20,
    fontSize: 14,
    lineHeight: 20.7,
    color: "#C7C7C7",
  },
  bioText: {
    position: "absolute",
    left: 25,
    zIndex: 10,
    color: "#C7C7C7",
    fontSize: 14,
    lineHeight: 20.7,
    top: -10,
    left: 20,
    backgroundColor: "#131313",
    paddingHorizontal: 5,
  },
  preview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  previewBtn: {
    borderRadius: 30.24,
    height: 28,
    width: 66,
    backgroundColor: "#4353FF",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  previewText: {
    fontSize: 10,
    lineHeight: 16.4,
    letterSpacing: -0.23,
    marginRight: -3,
    color: "#FFFFFF",
  },
});
