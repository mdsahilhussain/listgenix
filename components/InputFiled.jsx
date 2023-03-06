import { StyleSheet, View, TextInput } from "react-native";
import React, { useState } from "react";
import ColorSet from "../constants/ColorSet";
import { Button } from "react-native";

const InputFiled = (props) => {
  const { enterTask, setEnterTask } = props;



  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="enter your goalas"
        style={styles.input}
        value={enterTask}
        onChangeText={(text) => setEnterTask(text)}
      />
    </View>
  );
};
export default InputFiled;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 16,
  },
  input: {
    color: ColorSet.textColor,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 18,
    borderWidth: 0.5,
    borderRadius: 5,
    marginBottom: 12,
  },
});
