import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ColorSet from "../constants/ColorSet";

const PlaneScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text>Plane</Text>
      </View>
    </View>
  );
};

export default PlaneScreen;

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: ColorSet.bgColor,
  },
  container: {
    marginTop: 18,
  },
  p: {
    fontSize: 16,
    fontWeight: "400",
    color: ColorSet.textColor,
  },
  h1: {
    fontSize: 24,
    fontWeight: "600",
    color: ColorSet.textColor,
  },
  h5: {
    fontSize: 14,
    fontWeight: "500",
    color: ColorSet.textColor,
  },
  listContainer: {
    marginTop: 18,
  },
});
