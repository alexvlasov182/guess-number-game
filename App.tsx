import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";

const App: React.FC = () => {
  return (
    <LinearGradient
      colors={["#ff6e7f", "#bfe9ff"]} // Gradient colors
      style={(styles.gradient, styles.rootScreen)}
    >
      <StartGameScreen />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
