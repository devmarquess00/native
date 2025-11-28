import { styles } from "@/src/components/profile/profileEdit/styles";
import { FC } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type Props = {
  toggleModal: () => void;
};

const ProfileEdit: FC<Props> = ({ toggleModal }) => {
  return (
    <View>
      <View style={styles.containerModalContent}>
        <View style={styles.headerModalContent}>
          <View style={styles.headerEditContent}>
            <Text style={styles.textEdit}>Editar dados</Text>
            <Icon name="pencil" size={18} color="white" />
          </View>

          <Icon name="times" size={22} color="white" onPress={toggleModal} />
        </View>

        <View style={styles.containerInputs}>
          <TextInput style={styles.allInputs} />
          <TextInput style={styles.allInputs} />
        </View>

        <TouchableOpacity
          style={styles.buttonSaveChanges}
          onPress={toggleModal}
        >
          <Text style={styles.buttonSaveTextChanges}>Salvar alterações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { ProfileEdit };

