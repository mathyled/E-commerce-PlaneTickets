import { ViewIcon } from "@chakra-ui/icons";
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
  FormLabel,
  Box,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlightDetailsAdmin } from "../../../../../../../../../redux/actions/actions";

const ViewCartModal = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFlightDetailsAdmin(id));
  }, [id, dispatch]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const data = useSelector((state) => state.flight_Detail);
  // console.log("modal data...", data);
  return (
    <>
      <IconButton size="sm" onClick={onOpen} icon={<ViewIcon />} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Flight details</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            m={"3"}
            mt={"12"}
            textAlign={"center"}
            justifyContent={"center"}
          >
            <HStack spacing={"3"}>
              <Box>
                <Text fontSize="md" fontWeight="bold">
                  Departure
                </Text>
                <Text>{data.departure?.iataCode}</Text>
              </Box>
              <Box>
                <Text fontSize="md" fontWeight="bold">
                  Arrival
                </Text>
                <Text>{data.arrival?.iataCode}</Text>
              </Box>
              <Box>
                <Text fontSize="md" fontWeight="bold">
                  Weekday
                </Text>
                <Text>{data.weekday}</Text>
              </Box>
            </HStack>
            <br />
            <HStack spacing={"5"}>
              <Box>
                <Text fontSize="md" fontWeight="bold">
                  Airline
                </Text>
                <Text>{data.airline?.iataCode}</Text>
              </Box>
              <Box>
                <Text fontSize="md" fontWeight="bold">
                  Model Code
                </Text>
                <Text>{data.aircraft?.modelCode}</Text>
              </Box>
              <Box>
                <Text fontSize="md" fontWeight="bold">
                  Model
                </Text>
                <Text>{data.aircraft?.model}</Text>
              </Box>
            </HStack>
            <br />
            <HStack spacing={"5"}>
              <Box>
                <Text fontSize="md" fontWeight="bold">
                  Number
                </Text>
                <Text>{data.flight?.number}</Text>
              </Box>
              <Box>
                <Text fontSize="md" fontWeight="bold">
                  IATA Number
                </Text>
                <Text>{data.flight?.iataNumber}</Text>
              </Box>
              <Box>
                <Text fontSize="md" fontWeight="bold">
                  ICAO Number
                </Text>
                <Text>{data.flight?.icaoNumber}</Text>
              </Box>
            </HStack>
            <br />
            <HStack spacing={"5"}>
              <Box>
                <Text fontSize="md" fontWeight="bold">
                  Date
                </Text>
                <Text>{data.date}</Text>
              </Box>
              <Box>
                <Text fontSize="md" fontWeight="bold">
                  Price
                </Text>
                <Text>{data.price}</Text>
              </Box>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ViewCartModal;
