import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, View } from "react-native";
const Tab = createBottomTabNavigator();
import Ionicons from "react-native-vector-icons/Ionicons";
import ColorSet from "../constants/ColorSet";
import { AddScreen, HomeScreen, PlaneScreen } from "../screen";

const MyBottomNav = (props) => {
  const { list, onAddGoal, onCancelGoal, onDelGoal } = props;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: ColorSet.textColor,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: 56,
          paddingHorizontal: 24,
        },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: ColorSet.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      >
        {() => <HomeScreen list={list} />}
      </Tab.Screen>
      <Tab.Screen
        name="Add"
        options={{
          tabBarIcon: ({ color }) => (
            <View style={styles.addButton}>
              <Ionicons name="add" color={color} size={32} />
            </View>
          ),
        }}
      >
        {() => <AddScreen onAddGoal={onAddGoal} />}
      </Tab.Screen>
      <Tab.Screen
        name="Plane"
        component={PlaneScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MyBottomNav;

const styles = StyleSheet.create({
  addButton: {
    height: 58,
    width: 58,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ColorSet.textColor,
    top: -20,
    borderRadius: 100,
  },
});
