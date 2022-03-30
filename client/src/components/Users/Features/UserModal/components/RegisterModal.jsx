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
import { RegisterForm } from "../pages/RegisterForm"

function RegisterModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
             onClick={onOpen}
             display={{ base: "none", md: "inline-flex" }}
             fontSize={"sm"}
             fontWeight={600}
             color={"white"}
             bg={"teal.400"}
             href={"#"}
             _hover={{
               bg: "teal.800",
             }}
             >Sign Up</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Register</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <RegisterForm />
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

export default RegisterModal;