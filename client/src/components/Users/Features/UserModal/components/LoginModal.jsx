import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,

} from '@chakra-ui/react';
import { Loginpage } from "../pages/Loginpage"

function LoginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button 
      onClick={onOpen}
      as={"a"}
      fontSize={"sm"}
      fontWeight={400}
      variant={"link"}
      href={"#"}
      >Sign In</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Loginpage />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
};

export default  LoginModal;