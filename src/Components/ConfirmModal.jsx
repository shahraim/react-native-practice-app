import React from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ConfirmModal({
  isSecondModalVisible,
  setIsSecondModalVisible,
  toggleSecondModal,
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isSecondModalVisible}
      onRequestClose={() => {
        setIsSecondModalVisible(!isSecondModalVisible);
      }}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={toggleSecondModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.confirmHead}>
              <Text style={styles.modalText}>Are You Sure?</Text>
              <Text style={styles.modalSubText}>
                Are you sure you want to cancel your{" "}
                <Text style={styles.alandalText}>Alandal+ </Text>
                subscription?
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.confirmButton}>
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={toggleSecondModal}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
  },
  modalContent: {
    backgroundColor: "#1B1B1B",
    padding: 20,
    width: 345,
    borderRadius: 12,
    height: 233,
    justifyContent: "space-between",
    elevation: 5,
  },
  confirmHead: {
    height: 55,
    gap: 8,
  },
  modalText: {
    lineHeight: 19,
    fontSize: 18,
    color: "#fff",
  },
  modalSubText: {
    lineHeight: 19.6,
    fontSize: 12.5,
    color: "#777",
    letterSpacing: -0.28,
  },
  buttonContainer: {
    height: 122,
    gap: 16,
  },
  confirmButton: {
    backgroundColor: "#E33256",
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    height: 53,
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: "#D61B4C",
    borderRadius: 200,
    height: 53,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: -0.28,
  },
  alandalText: {
    color: "rgba(214,26,76,0.6)",
  },
});
