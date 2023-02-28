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
  const [list, setList] = useState([
    {
      id: 1,
      task: "sahil",
    },
    {
      id: 2,
      task: "sahil",
    },
    {
      id: 3,
      task: "sahil",
    },
  ]);
  return (
    <NavigationContainer style={{ backgroundColor: "#000000" }}>
      <MyBottomNav list={list} />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
