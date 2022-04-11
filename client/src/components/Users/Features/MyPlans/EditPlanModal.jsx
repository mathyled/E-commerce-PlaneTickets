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
} from "@chakra-ui/react";
import PlanForm from "../PlanForm/PlanForm";

function EditPlanModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton size="sm" onClick={onOpen} icon={<EditIcon />} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit My plans</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PlanForm type="edit"/>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditPlanModal;
