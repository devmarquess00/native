import { styles } from "@/src/components/add/inputs/styles";
import { Pressable, Text, TextInput, View } from "react-native";

const Inputs = () => {
  return (
    <View style={styles.containerInputs}>
      <TextInput
        placeholder="R$00,00"
        placeholderTextColor="#A39D9D"
        style={styles.inputValueCash}
      />

      <View style={styles.containerInputsNameAndCategory}>
        <TextInput
          placeholder="Nome para transação"
          placeholderTextColor="#A39D9D"
          style={styles.inputName}
        />

        <TextInput
          placeholder="Selecione"
          placeholderTextColor="#A39D9D"
          style={styles.inputName}
        />
      </View>

      <Pressable style={styles.buttonTransaction}>
        <Text style={styles.buttonTransactionText}>Cadastrar transação</Text>
      </Pressable>
    </View>
  );
};

export { Inputs };

