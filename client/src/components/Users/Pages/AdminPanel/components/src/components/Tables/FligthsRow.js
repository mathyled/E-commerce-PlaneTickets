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

const FligthsRow = ({ index, depature, arrival, price, date, id }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Tr>
      <Td minWidth={{ sm: "150px" }} pl="0px">
        <Text fontSize="md" color={textColor} fontWeight="bold" minWidth="100%">
          {index}
        </Text>
      </Td>
      <Td minWidth={{ sm: "150px" }} pl="0px">
        <Text fontSize="md" color={textColor} fontWeight="bold" minWidth="100%">
          {depature}
        </Text>
      </Td>
      <Td minWidth={{ sm: "150px" }} pl="0px">
        <Text fontSize="md" color={textColor} fontWeight="bold" minWidth="100%">
          {arrival}
        </Text>
      </Td>
      <Td minWidth={{ sm: "150px" }} pl="0px">
        <Text fontSize="md" color={textColor} fontWeight="bold" minWidth="100%">
          {price}
        </Text>
      </Td>
      <Td minWidth={{ sm: "150px" }} pl="0px">
        <Text fontSize="md" color={textColor} fontWeight="bold" minWidth="100%">
          {date}
        </Text>
      </Td>
      <Td>
        <HStack>
          <DeleteCartModal id={id} />
          <ViewCartModal id={id} />
          {/* <EditCartModal id={id} /> */}
        </HStack>
      </Td>
    </Tr>
  );
};

export default FligthsRow;
