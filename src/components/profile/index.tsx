import { styles } from "@/src/components/profile/styles";
import { FC } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type Props = {
  toggleModal: () => void;
}

const ProfileWrapper: FC<Props> = ({toggleModal}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainerCirlce}>
        <Icon name="user" color="#A39D9D" size={82} />
      </View>

      <View style={styles.allTextContainer}>
        <Text style={styles.allText}>devmarques00</Text>
        <Text style={styles.allText}>devmarques00@gmail.com</Text>

        <TouchableOpacity style={styles.buttonEditProfile} onPress={toggleModal}>
          <Text style={styles.buttonTextEditProfile}>Editar perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { ProfileWrapper };

