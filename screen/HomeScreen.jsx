import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ColorSet from "../constants/ColorSet";
import Card from "../components/Card";

const HomeScreen = (props) => {
  const { list } = props;
  let list_length = list?.length;

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.h5}>Hello,</Text>
        <Text style={styles.h1}>M Sahil Hussain</Text>
        <Text style={styles.p}>{`Your have ${list_length} task remain`}</Text>

        <View>
          <FlatList
            style={styles.listContainer}
            data={list}
            keyExtractor={(item) => item.id}
            renderItem={(goal) => <Card title={goal.item.task} />}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop:44,
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
