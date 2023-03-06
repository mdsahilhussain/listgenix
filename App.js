import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import ColorSet from "./constants/ColorSet";

import AppIntroSlider from "react-native-app-intro-slider";
import MyBottomNav from "./navigation/MyBottomNav";

const slides = [
  {
    id: "1",
    title: "Get Organized with Listgenix",
    subTitle:
      "Say goodbye to forgotten tasks and hello to stress-free productivity.",
    image: require("./assets/workLoad.png"),
  },
  {
    id: "2",
    title: "Get Organized with Listgenix",
    subTitle:
      " The ultimate tool for managing your tasks and responsibilities on-the-go.",
    image: require("./assets/todoList.png"),
  },
  {
    id: "3",
    title: "Welcome to Listgenix!",
    subTitle:
      "Your personal task manager for staying organized and productive.",
    image: require("./assets/achievement.png"),
  },
];

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);
  const [list, setList] = useState([]);
  const [subList, setSubList] = useState([]);
  const { width } = useWindowDimensions();

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
  const buttonLabel = (label) => {
    return (
      <View
        style={{
          padding: 12,
        }}
      >
        <Text
          style={{
            fontWeight: "600",
          }}
        >
          {label}
        </Text>
      </View>
    );
  };

  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View style={styles.constainer}>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="contain"
              />
              <View style={{}}>
                <Text style={styles.h1} item>
                  {item.title}
                </Text>
                <Text style={styles.h5} item>
                  {item.subTitle}
                </Text>
              </View>
            </View>
          );
        }}
        dotStyle={{
          backgroundColor: "#fff",
        }}
        activeDotStyle={{
          backgroundColor: ColorSet.primary,
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          setShowHomePage(true);
        }}
      />
    );
  }

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

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: ColorSet.bgColor,
  },
  image: {
    flex: 0.7,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  h1: {
    fontSize: 24,
    fontWeight: "600",
    color: ColorSet.textColor,
    textAlign: "center",
  },
  h5: {
    fontSize: 14,
    fontWeight: "500",
    color: ColorSet.textColor,
    textAlign: "center",
  },
});
