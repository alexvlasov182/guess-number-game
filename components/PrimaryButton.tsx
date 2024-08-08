import React from "react";
import { View, Text } from "react-native";

// Define the type of the component props
interface PrimaryButtonProps {
  children: React.ReactNode; // Type for children prop
}
const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;
