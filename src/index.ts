import { StyleSheet } from "react-native";

const createStyle = <T>(style: () => T) => StyleSheet.create(style);

export { createStyle };