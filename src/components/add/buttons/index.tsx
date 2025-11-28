import { styles } from "@/src/components/add/buttons/styles";
import { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

type Props = {
  onClickButtonExit: () => void;
  onClickButtonEntries: () => void;
  buttonEntriesValue: boolean;
  buttonExitValue: boolean;
};

const Buttons: FC<Props> = ({
  onClickButtonExit,
  onClickButtonEntries,
  buttonEntriesValue,
  buttonExitValue,
}) => {
  return (
    <View style={styles.containerButtons}>
      <TouchableOpacity
        style={[styles.buttonExit, buttonExitValue && styles.buttonExitClick]}
        onPress={onClickButtonExit}
      >
        <Icon name="arrow-down" size={16} color={buttonExitValue ? "#ffffff" : "#E22B1B"} />
        <Text
          style={[
            styles.textInButtonExit,
            buttonExitValue && styles.textInButtonExitWhenClick,
          ]}
        >
          Saída
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.buttonEntries,
          buttonEntriesValue && styles.buttonEntriesClick,
        ]}
        onPress={onClickButtonEntries}
      >
        <Icon
          name="arrow-up"
          size={16}
          color={buttonEntriesValue ? "#ffffff" : "#4BD388"}
        />
        <Text
          style={[
            styles.textInButtonEntries,
            buttonEntriesValue && styles.textInButtonEntriesWhenClick,
          ]}
        >
          Entrada
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export { Buttons };

