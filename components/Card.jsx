import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ColorSet from "../constants/ColorSet";

const Card = (props) => {
  return (
    <View style={styles.card}>
      <Text style={{ ...props.style }}>{props.title}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 44,
    backgroundColor: ColorSet.primary,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 8,
  },
});
