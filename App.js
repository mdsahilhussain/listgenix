import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorSet from "./constants/ColorSet";
import { IconScreen, HomeScreen } from "./screen";
import MyBottomNav from "./navigation/MyBottomNav";

export default function App() {
  const [list, setList] = useState([]);
  const [subList, setSubList] = useState([]);

  const addHandler = (enterTask) => {
    if (enterTask.trim() === "") {
      return;
    }

    setList((currentGoals) => [
      ...currentGoals,
      {
        id: list.length + 1,
        task: enterTask,
        subList: subList,
      },
    ]);
  };

  const addSubListHandler = (enterSubTask) => {
    if (enterSubTask.trim() === "") {
      return;
    }

    setSubList((currentGoals) => [
      ...currentGoals,
      {
        id: subList.length + 1,
        task: enterSubTask,
      },
    ]);
  };

  const goalsRemoveHandler = (id) => {
    setList((currentGoals) => {
      return currentGoals.filter((goals) => goals.id !== id);
    });
  };

  return (
    <NavigationContainer style={{ backgroundColor: "#000000" }}>
      <MyBottomNav
        list={list}
        onAddGoal={addHandler}
        onDelGoal={goalsRemoveHandler}
      />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
