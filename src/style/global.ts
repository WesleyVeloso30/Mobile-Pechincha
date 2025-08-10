import Colors from "@src/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
shadow: {
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 8,
    overflow: 'visible',
}});
