import { useState } from 'react';

export function useProfile() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    }

    return {
        isModalOpen,
        toggleModal
    }
}