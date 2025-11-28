import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  profileContainerCirlce: {
    width: 200,
    height: 200,
    borderColor: "#A39D9D",
    backgroundColor: "#0D0D0D",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  allTextContainer: {
    marginTop: 32,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 280,
  },

  allText: {
    color: "white",
    fontSize: 18,
  },

  buttonEditProfile: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D0D0D",
    width: "100%",
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 14,
    height: 50,
  },

  buttonTextEditProfile: {
    color: "white",
    fontWeight: 700,
    fontSize: 14,
    textAlign: "center",
  },
});
