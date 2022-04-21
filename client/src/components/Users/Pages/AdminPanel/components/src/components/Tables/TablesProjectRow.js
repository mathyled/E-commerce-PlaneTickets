import React from "react";
import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";

import {
  removeUserFavorite,
  getUserFavorites,
} from "../../../../../../../../redux/actions/actions";

function DashboardTableRow(props) {
  const {
    image,
    isFavorites,
    origin,
    arrival,
    departureTime,
    name,
    status,
    budget,
    isOrder,
    id,
    userId,
  } = props;

  const dispatch = useDispatch();
  const textColor = useColorModeValue("gray.700", "white");
  if (isOrder) {
    return (
      <Tr>
        <Td minWidth={{ sm: "250px" }} pl="0px">
          <Link to={`/admin/orders/${id}`}>
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {name}
            </Text>
          </Link>
        </Td>
        <Td>
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {budget}
          </Text>
        </Td>
        <Td>
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {status}
          </Text>
        </Td>
      </Tr>
    );
  } else if (isFavorites) {
    return (
      <Tr>
        <Td minWidth={{ sm: "250px" }} pl="0px">
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
            <Avatar src={image} w="50px" borderRadius="12px" me="18px" />
            <Text
              fontSize="md"
              color={textColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {origin}
            </Text>
          </Flex>
        </Td>
        <Td>
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {arrival}
          </Text>
        </Td>
        <Td>
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {departureTime}
          </Text>
        </Td>
        <Td>
          <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
            {budget}
          </Text>
        </Td>
        <Td>
          <DeleteIcon
            onClick={() => {
              dispatch(removeUserFavorite(userId, id));

              dispatch(getUserFavorites(userId));
            }}
            _hover={{ cursor: "pointer" }}
          />
        </Td>
      </Tr>
    );
  }
}

export default DashboardTableRow;
