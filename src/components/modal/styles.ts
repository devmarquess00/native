import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10000,
    borderTopRightRadius: 52,
    borderTopLeftRadius: 52,
    backgroundColor: "#0D0D0D",
    height: 'auto',
    //height: 320,
    paddingHorizontal: 22,
    paddingBottom: 62,
  },
});
