import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import { InputFiled } from "../components";
import ColorSet from "../constants/ColorSet";

const AddScreen = (props) => {
  const { onAddGoal } = props;
  const [enterTask, setEnterTask] = useState("");

  const [enterSubTask, setEnetrSubTask] = useState("");
  const clearInputHandler = () => {
    setEnterTask("");
  };
  const subList = () => {
    for (let i = 0; i < 5; i++) {
      return <InputFiled />;
    }
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
          <Text>sub task</Text>
          <View>{subList()}</View>
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
  listContainer: {
    marginTop: 18,
  },
});
