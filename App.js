import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import TopBar from "./navigation/TopBar";
import { NavigationContainer } from "@react-navigation/native";

function App() {
  return (
    <NavigationContainer>
      <TopBar />
    </NavigationContainer>
  );
}

export default App;
