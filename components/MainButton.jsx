import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ColorSet from "../constants/ColorSet";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: ColorSet.primary,
    width: "100%",
  },
  buttonText: {
    color: ColorSet.textColor,
  },
});
