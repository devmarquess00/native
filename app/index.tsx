import { useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
const { height } = Dimensions.get("window");

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const router = useRouter()

  const handleAddToCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrementToCount = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador React-Native</Text>

      <View style={styles.containerButtons}>
        <Pressable style={styles.buttonIncrement} onPress={handleAddToCount}>
          <Text style={styles.buttonTextIncrement}>+</Text>
        </Pressable>

        <Pressable
          style={[styles.buttonDecrement, count === 0 && styles.buttonDisabled]}
          disabled={count === 0}
          onPress={handleDecrementToCount}
        >
          <Text style={styles.buttonTextDecrement}>-</Text>
        </Pressable>
      </View>

      <Text style={styles.count}>{count}</Text>

      <Pressable style={styles.buttonPushDashboard} onPress={() => {
        router.push('/dashboard')
      }}>
        <Text>Ir para dashboard</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: height,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 16,
    marginBottom: 10,
    fontStyle: "italic",
  },

  containerButtons: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginTop: 6,
  },

  buttonIncrement: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    padding: 4,
    width: 50,
    borderRadius: 4,
  },

  buttonDisabled: {
    backgroundColor: "gray",
  },

  buttonDecrement: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: 4,
    width: 50,
    borderRadius: 4,
  },

  buttonTextIncrement: {
    color: "white",
    fontWeight: 600,
  },

  buttonTextDecrement: {
    color: "white",
    fontWeight: 600,
  },

  count: {
    fontSize: 22,
    fontWeight: 600,
    marginTop: 14,
  },

  buttonPushDashboard: {
    marginTop: 4,
  },
});
