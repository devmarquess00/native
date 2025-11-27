import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  navigation: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    marginHorizontal: 22,
    marginBottom: 42,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
  },

  navigationList: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },

  navigationLabel: {
    color: "white",
    marginTop: 4,
  },

  buttonNavigation: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }
});
