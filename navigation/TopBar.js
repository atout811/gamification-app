import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, StyleSheet, Platform } from "react-native";
import Home from "../screens/Home";
import Quests from "../screens/Quests";
import Courses from "../screens/Courses";

const Tab = createMaterialTopTabNavigator();

function TobBar() {
  return (
    <Tab.Navigator style={Styles.droidSafeArea}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Courses" component={Courses} />
      <Tab.Screen name="Quests" component={Quests} />
    </Tab.Navigator>
  );
}

const Styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    // backgroundColor: "#112334",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});

export default TobBar;
