import { styles } from "@/src/components/add/inputs/styles";
import { onlyNumbers } from "@/src/utils";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const Inputs = () => {
  const [value, setValue] = useState("");

  return (
    <View style={styles.containerInputs}>
      <TextInput
        value={value}
        placeholder="R$00,00"
        placeholderTextColor="#A39D9D"
        style={styles.inputValueCash}
        onChangeText={(value: any) => {
          const only = onlyNumbers(value);
          setValue(only);
        }}
      />

      <View style={styles.containerInputsNameAndCategory}>
        <TextInput
          placeholder="Nome para transação"
          placeholderTextColor="#A39D9D"
          style={styles.inputName}
        />

        <View style={styles.containerCategory}>
          <Text style={styles.categoryText}>Categoria</Text>
          <Icon name="tag" color="white" />
        </View>
      </View>

      <TouchableOpacity style={styles.buttonTransaction}>
        <Text style={styles.buttonTransactionText}>Cadastrar transação</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Inputs };

