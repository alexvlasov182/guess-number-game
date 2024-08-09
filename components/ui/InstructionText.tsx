import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

interface InstructionTextProps {
  children: React.ReactNode; // Type for children prop
}
const InstructionText: React.FC<InstructionTextProps> = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.white,
    fontSize: 24,
  },
});
