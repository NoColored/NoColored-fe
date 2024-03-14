import { ReactNode, useState } from 'react';

import ModalComponent from '@/components/Modal/index.tsx';

interface Props {
  children: ReactNode;
}

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const Modal = ({ children }: Props) => {
    return (
      <ModalComponent isOpen={isOpen} onClose={closeModal}>
        {children}
      </ModalComponent>
    );
  };

  return { Modal, openModal, closeModal };
};

export default useModal;
