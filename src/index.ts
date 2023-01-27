import { StyleSheet } from "react-native";

const createStyle = <T>(style: () => T) => {
  return StyleSheet.create(style);
};

export { createStyle };