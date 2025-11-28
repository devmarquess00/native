import { useState } from "react";

export function useHome() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return {
    isModalOpen,
    toggleModal,
  };
}
