import { styles } from "@/src/components/add/categorys/styles";
import { menuCategorys } from "@/src/menu";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Categorys = () => {
  return (
    <View style={styles.containerButtonsCategory}>
      {menuCategorys.map((item: any) => (
        <TouchableOpacity key={item.id} style={styles.buttonCategory}>
          <Icon name={item.icon} color="white" />
          <Text style={styles.buttonTextCategory}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export { Categorys };

