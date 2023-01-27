import { StyleSheet } from "react-native";

export const createStyle = <T>(style: () => T) => StyleSheet.create(style);