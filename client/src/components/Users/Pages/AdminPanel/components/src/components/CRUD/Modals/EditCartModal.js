import { EditIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
  useDisclosure,
  Text,
  Button,
  HStack,
  useToast,
} from "@chakra-ui/react";
import React from "react";

const EditCartModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton size="sm" onClick={onOpen} icon={<EditIcon />} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Flight details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen.
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditCartModal;
