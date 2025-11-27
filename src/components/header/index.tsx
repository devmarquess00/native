import { styles } from "@/src/components/header/styles";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.containerText}>
        <Text style={styles.welcomeText}>Bem-vindo,</Text>
        <Text style={styles.userText}>userusingdev00</Text>
      </View>
      <Icon name="log-out" size={22} color="white" />
    </View>
  );
};

export { Header };

