import { Card } from "@/src/components/card";
import { Header } from "@/src/components/header";
import { Modal } from "@/src/components/modal";
import { Navigation } from "@/src/components/navigation";
import { Transactions } from "@/src/components/transactions";
import { useHome } from "@/src/hooks/home/useHome";

import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const { isModalOpen, toggleModal } = useHome();

  return (
    <View style={styles.containerMain}>
      <Header />
      <StatusBar barStyle="light-content" />

      <View>
        <Card />
        <Transactions toggleModalDelete={toggleModal} />
      </View>

      <Navigation />

      <Modal isOpen={isModalOpen}>
        <View style={styles.containerContentModal}>
          <View>
            <Text style={styles.titleTextModal}>Deseja apagar?</Text>
          </View>

          <View style={styles.containerButtons}>
            <TouchableOpacity style={styles.buttonCancel} onPress={toggleModal}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDelete} onPress={toggleModal}>
              <Text style={styles.buttonText}>Apagar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 30,
    backgroundColor: "#080808",
  },

  containerContentModal: {
    marginTop: 36,
    marginHorizontal: 22,
  },

  titleTextModal: {
    color: "white",
    fontSize: 16,
  },

  containerButtons: {
    gap: 8,
    marginTop: 22,
    flexDirection: "row",
  },

  buttonCancel: {
    backgroundColor: "#E22B1B",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 6,
    flex: 1,
  },

  buttonDelete: {
    backgroundColor: "#080808",
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 6,
    flex: 1,
  },

  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: 700,
  },
});
