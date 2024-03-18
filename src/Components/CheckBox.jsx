import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CheckBox = (props) => {
  const iconName = props.isChecked
    ? "checkbox-marked"
    : "checkbox-blank-outline";

  return (
    <View style={styles.container}>
      <Pressable onPress={props.onPress}>
        <MaterialCommunityIcons
          name={iconName}
          style={styles.check}
          size={18}
          color="#000"
        />
      </Pressable>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 5,
  },
  check: {
    color: "#D61A4C",
  },
  title: {
    fontSize: 14,
    lineHeight: 24,
    color: "#F8F8F8",
    marginLeft: 5,
    letterSpacing: 0.2,
    fontWeight: "600",
  },
});
