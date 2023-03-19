import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import { InputFiled } from "../components";
import ColorSet from "../constants/ColorSet";
import Ionicons from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

const AddScreen = (props) => {
  const { onAddGoal } = props;
  const [enterTask, setEnterTask] = useState("");
  const [sublistNum, setSublitNum] = useState(1);

  const [enterSubTask, setEnetrSubTask] = useState("");
  const clearInputHandler = () => {
    setEnterTask("");
  };

  const addSublistHandler = () => {
    setSublitNum(sublistNum + 1);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.h5}>Hello,</Text>
        <Text style={styles.h1}>M Sahil Hussain</Text>
        <Text style={styles.p}>Add your today tasks</Text>
        <View>
          <InputFiled enterTask={enterTask} setEnterTask={setEnterTask} />
        </View>
        <View>
          <View style={styles.sublitsHead}>
            <Text style={styles.p}>Sub Task</Text>
            <TouchableOpacity onPress={addSublistHandler}>
              <View style={styles.btn}>
                <Ionicons name="add" color={ColorSet.textColor} size={24} />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            {Array?.from({ length: sublistNum }, (_, i) => (
              <InputFiled key={i} />
            ))}
          </View>
        </View>
        <View>
          <Button
            title="ADD TASK"
            onPress={() => {
              onAddGoal(enterTask), clearInputHandler();
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: 44,
    paddingVertical: 16,
    paddingHorizontal: 18,
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

  sublitsHead: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    padding: 1,
    backgroundColor: ColorSet.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
});
