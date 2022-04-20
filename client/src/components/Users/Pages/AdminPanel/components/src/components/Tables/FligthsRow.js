import {
  Flex,
  HStack,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import DeleteCartModal from "../CRUD/Modals/DeleteCartModal";
import EditCartModal from "../CRUD/Modals/EditCartModal";
import ViewCartModal from "../CRUD/Modals/ViewCartModal";

const FligthsRow = ({ depature, arrival, price, date }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Tr>
      <Td minWidth={{ sm: "150px" }} pl="0px">
        <Text fontSize="md" color={textColor} fontWeight="bold" minWidth="100%">
          Madrid
        </Text>
      </Td>
      <Td minWidth={{ sm: "150px" }} pl="0px">
        <Text fontSize="md" color={textColor} fontWeight="bold" minWidth="100%">
          Bogota
        </Text>
      </Td>
      <Td minWidth={{ sm: "150px" }} pl="0px">
        <Text fontSize="md" color={textColor} fontWeight="bold" minWidth="100%">
          $450
        </Text>
      </Td>
      <Td minWidth={{ sm: "150px" }} pl="0px">
        <Text fontSize="md" color={textColor} fontWeight="bold" minWidth="100%">
          2022-12-12
        </Text>
      </Td>
      <Td>
        <HStack>
          <DeleteCartModal />
          <ViewCartModal />
          <EditCartModal/>
        </HStack>
      </Td>
    </Tr>
  );
};

export default FligthsRow;
