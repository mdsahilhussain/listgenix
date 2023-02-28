import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";

const IconScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icon.png")}
        style={styles.Image}
        resizeMode="cover"
      />
    </View>
  );
};

export default IconScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    width: Dimensions.get("window").width * 0.25,
    height: Dimensions.get("window").width * 0.25,
  },
});
