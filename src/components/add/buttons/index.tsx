import { styles } from "@/src/components/add/buttons/styles";
import { Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const Buttons = () => {
  return (
    <View style={styles.containerButtons}>
      <Pressable style={styles.buttonExit}>
        <Icon name="arrow-down" size={16} color="#fff" />
        <Text style={styles.textInButton}>Saída</Text>
      </Pressable>

      <Pressable style={styles.buttonEntries}>
        <Icon name="arrow-up" size={16} color="#fff" />
        <Text style={styles.textInButton}>Entrada</Text>
      </Pressable>
    </View>
  );
};

export { Buttons };

