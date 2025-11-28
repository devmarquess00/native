import { Modal } from "@/src/components/modal";
import { Navigation } from "@/src/components/navigation";
import { ProfileWrapper } from "@/src/components/profile";
import { ProfileEdit } from "@/src/components/profile/profileEdit";
import { useProfile } from "@/src/hooks/profile/useProfile";
import { StyleSheet, View } from "react-native";

export default function Profile() {
  const { isModalOpen, toggleModal } = useProfile();

  return (
    <View style={styles.container}>
      <View style={styles.wrapperProfile}>
        <ProfileWrapper toggleModal={toggleModal} />
      </View>

      <Modal isOpen={isModalOpen}>
        <ProfileEdit toggleModal={toggleModal} />
      </Modal>

      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 30,
    backgroundColor: "#080808",
  },

  wrapperProfile: {
    marginTop: 82,
  },
});
