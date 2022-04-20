import { DeleteIcon } from "@chakra-ui/icons";
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
// import { useDispatch } from "react-redux";
// import { deleteItinerary } from "../../../../redux/actions/actions";

function DeleteCartModal({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   const toast = useToast();
  //   const dispatch = useDispatch();
  //   function handleDelete() {
  //     dispatch(deleteItinerary(id));
  //     console.log("Se borró el vuelo con este id...", id);
  //     toast({
  //       title: "The plan was deleted succesfully",
  //       status: "success",
  //       duration: 3000,
  //     });
  //   }
  return (
    <>
      <IconButton size="sm" onClick={onOpen} icon={<DeleteIcon />} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Fligth</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Are you sure you want to delete this Flight? It won't be able to
              recovery later
            </Text>
            <HStack
              justifyContent={"center"}
              alignItems={"center"}
              my={5}
              spacing="10px"
            >
              <Button variant="solid" colorScheme="red">
                Delete
              </Button>
              <Button variant="outline" colorScheme="teal.400">
                Cancel
              </Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteCartModal;
