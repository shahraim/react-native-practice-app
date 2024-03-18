import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ConfirmPassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSavePassword = () => {
    // Add logic to save the password
    console.log("Current Password:", currentPassword);
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <View style={styles.passwordSec}>
      <View style={styles.passwordHeader}>
        <Text style={styles.passwordHeading}>Change Password</Text>
        <Text style={styles.passwordpara}>
          Please enter a strong password with at least 8 characters, one
          uppercase character, one lowercase, and one special character.
        </Text>
      </View>
      <View style={styles.passwordInputs}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Current Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Current Password"
            placeholderTextColor="#636573"
            // secureTextEntry
            value={currentPassword}
            onChangeText={(text) => setCurrentPassword(text)}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>New Password</Text>
          <TextInput
            style={styles.input}
            placeholder="New Password"
            placeholderTextColor="#636573"
            // secureTextEntry
            value={newPassword}
            onChangeText={(text) => setNewPassword(text)}
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>New Password Confirmation</Text>
          <TextInput
            style={styles.input}
            placeholder="New Password Again"
            placeholderTextColor="#636573"
            // secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSavePassword}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
 
  passwordSec: {
    height: 421,
    gap: 24,
  },
  passwordHeader: {
    height: 92,
    width: 326,
    gap: 14,
  },
  passwordHeading: {
    fontSize: 18,
    // lineHeight: 16,
    color: "#F8F8F8",
  },
  passwordpara: {
    fontSize: 12,
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#F8F8F8",
  },
  passwordInputs: {
    height: 231.5,
    gap: 16,
  },
  inputBox: {
    height: 66.5,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 68,
    position: "relative",
    borderColor: "rgba(255,255,255,0.09)",
  },
  inputLabel: {
    position: "absolute",
    fontSize: 14,
    lineHeight: 20.7,
    color: "#FFFFFF",
    backgroundColor: "#131313",
    paddingHorizontal: 5,
    left: 25,
    top: -10,
  },
  input: {
    height: "100%",
    paddingHorizontal: 27,
    color: "#ccc",
    fontSize: 14,
    lineHeight: 20.7,
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
});
