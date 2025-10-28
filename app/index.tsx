import { Dimensions, Image, StyleSheet, View } from "react-native";
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/avatar.png")}
        style={styles.imageAvatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: SCREEN_HEIGHT,
    backgroundColor: "#080808",
  },
  imageAvatar: {
    width: 222,
    height: 222,
  },
});
