import {
  Box,
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlightsAdmin } from "../../../../../../../../../../redux/actions/actions";
import Card from "../../../../components/Card/Card";
import CardBody from "../../../../components/Card/CardBody";
import CardHeader from "../../../../components/Card/CardHeader";
import CreateForm from "../../../../components/CRUD/CreateForm";
import FligthsRow from "../../../../components/Tables/FligthsRow";

const Flights = ({ title, captions }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.flights_Cart);
  useEffect(() => {
    dispatch(getFlightsAdmin());
  }, [dispatch]);
  // console.log("La info que llega de back", data);
  return (
    <Card my="22px" overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p="6px 0px 22px 0px">
        <Flex direction="column">
          <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
            {title}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Box>
          <CreateForm />
          <CardHeader p="6px 0px 22px 0px">
            <Flex direction="column">
              <Text
                fontSize="lg"
                color={textColor}
                fontWeight="bold"
                pb=".5rem"
              >
                Flights table
              </Text>
            </Flex>
          </CardHeader>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                {captions.map((caption, idx) => {
                  return (
                    <Th
                      color="gray.400"
                      key={idx}
                      ps={idx === 0 ? "0px" : null}
                    >
                      {caption}
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((el, i) => (
                <FligthsRow
                  key={el._id}
                  index={i}
                  depature={el.departure.iataCode}
                  arrival={el.arrival.iataCode}
                  price={el.price}
                  date={el.date}
                  id={el._id}
                />
              ))}
            </Tbody>
          </Table>
        </Box>
      </CardBody>
    </Card>
  );
};

export default Flights;
