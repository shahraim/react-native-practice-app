import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
export default function SubscribeModal({
  isModalVisible,
  setIsModalVisible,
  toggleModal,
}) {
  const [dropdownIcon, setDropdownIcon] = useState("keyboard-arrow-down");
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(!isModalVisible);
      }}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.topBorderDiv}>
              <Text style={styles.topBorder}></Text>
            </View>
            <View style={styles.subscribeTier}>
              <View style={styles.dropdownContainer}>
                <Text style={styles.dropdownLabel}>Subscription Tier</Text>
                <View style={styles.dropdown}>
                  <Text style={styles.dropdownText}>Upgrade Tier</Text>
                  <MaterialIcons
                    name={dropdownIcon}
                    size={20}
                    color="white"
                    style={styles.dropdownIcon}
                  />
                </View>
              </View>
              <View style={styles.midBorder} />
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.saveButton}>
                  <Text style={styles.saveButtonText}>Save Changes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton}>
                  <Text style={styles.cancelButtonText}>
                    Cancel Subscription
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "flex-end",
  },
  topBorderDiv: {
    justifyContent: "center",
    alignItems: "center",
  },
  topBorder: {
    width: 54,
    height: 6,
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
  },
  modalContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 0,
  },
  modalContent: {
    width: "100%",
    backgroundColor: "#131313",
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap: 32,
  },
  dropdownContainer: {
    // marginBottom: 20,
    height: 84,
    gap: 8,
  },
  midBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
    opacity: 0.3,
  },
  buttonsContainer: {
    flexDirection: "column",
    gap: 16,
    justifyContent: "space-between",
  },
  saveButton: {
    backgroundColor: "#E33256",
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    height: 53,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.28,
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: "#D61B4C",
    borderRadius: 200,
    height: 53,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.28,
  },
  dropdownLabel: {
    lineHeight: 23,
    fontSize: 16,
    color: "#fff",
  },
  subscribeTier: {
    height: 254,
    gap: 24,
  },
  dropdown: {
    height: 53,
    borderWidth: 1,
    borderRadius: 200,
    paddingLeft: 24,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#fff",
  },
  dropdownText: {
    fontSize: 16,
    lineHeight: 23,
    color: "#fff",
  },
  dropdownIcon: {
    color: "#D61B4C",
  },
});
