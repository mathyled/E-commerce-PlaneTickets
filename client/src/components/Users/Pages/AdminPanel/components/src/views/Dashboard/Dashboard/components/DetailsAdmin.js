// Chakra imports
import {
  Center,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Projects from "../../../../views/Dashboard/Tables/components/Projects";

function Details() {
  // Chakra color mode
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState({});
  const [ordersId, setOrdersId] = useState([]);
  let { id } = useParams();

  let [user, setUser] = useState({ username: "", password: "", id: "" });
  let baseUrl = "http://localhost:3001/";
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  async function getOrder() {
    let json = await axios.request({
      method: "get",
      url: `${baseUrl}api/order/`,
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWRkNWUyZjM0ODU2OGM5NjRiZWE0NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDMyMTg5MSwiZXhwIjoxNjUwNTgxMDkxfQ.XTPcIAjStJu54iq9Pur9_DfuSnlLHa7K8a1v3V620r4",
      },
    });
    setOrder(json?.data?.orders.filter((order) => order._id === id));
  }

  async function getUser(localId) {
    let json = await axios.request({
      method: "get",
      url: `${baseUrl}api/users/find/${localId}`,
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWRkNWUyZjM0ODU2OGM5NjRiZWE0NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDMyMTg5MSwiZXhwIjoxNjUwNTgxMDkxfQ.XTPcIAjStJu54iq9Pur9_DfuSnlLHa7K8a1v3V620r4",
      },
    });
    setUser(json.data.user);
  }

  async function getUserOrders(localId) {
    let json = await axios.request({
      method: "get",
      url: `${baseUrl}api/flightsOffer/getall/`,
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWRkNWUyZjM0ODU2OGM5NjRiZWE0NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDMyMTg5MSwiZXhwIjoxNjUwNTgxMDkxfQ.XTPcIAjStJu54iq9Pur9_DfuSnlLHa7K8a1v3V620r4",
      },
    });
    const filterData = [];
    [...json.data.data.offers].filter((offer) => {
      let it = 0;
      order[0].products.map((product) => {
        it++;
        if (product[`product_${it}`] === offer._id) {
          filterData.push(offer);
        }
      });
    });
    setItems([...filterData]);
  }

  useEffect(() => {
    if (order.length > 0) {
      getUser(order[0].userId);

      getUserOrders();
    }
  }, [order]);

  useEffect(() => {
    getOrder();
  }, []);
  return (
    <Flex direction="column">
      <Center>
        <VStack>
          <Heading>{`Order ${id}`}</Heading>

          <Text>{`Username: ${user.username}`}</Text>
          <Text>{`Id: ${user.id}`}</Text>
          <Text>{`Id: ${user.email}`}</Text>
          <br></br>
          <Text>{`Products`}</Text>
          <Container>
            <Projects
              data={items}
              details={true}
              captions={["Name", "Price"]}
            />
          </Container>
        </VStack>
      </Center>
    </Flex>
  );
}

export default Details;
