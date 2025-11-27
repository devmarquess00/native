import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 62,
  },

  containerText: {
    flexDirection: "column",
    gap: 0,
  },

  welcomeText: {
    color: "white",
  },

  userText: {
    fontSize: 16,
    fontWeight: 800,
    lineHeight: 12,
    color: "white",
  },
});
