import React from "react";
import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

interface TitleProps {
  children: React.ReactNode; // Type for children prop
}
const Title: React.FC<TitleProps> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.white,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.white,
    padding: 12,
  },
});
