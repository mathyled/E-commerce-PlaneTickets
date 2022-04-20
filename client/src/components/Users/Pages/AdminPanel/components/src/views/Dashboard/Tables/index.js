// Chakra imports
import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Authors from "./components/Authors";
import Projects from "./components/Projects";
import {
  tablesTableData,
  dashboardTableData,
} from "../../../variables/general";

import Flights from "./components/Flights";
import axios from "axios";


let baseUrl = "http://localhost:3001/";

export function UserTable() {
  let [allUsers, setAllUsers] = useState([]);

  function updateUsers(id) {
    setAllUsers(allUsers.filter((user) => id !== user._id));
  }
  async function getUsers() {
    let json = await axios.request({
      method: "get",
      url: `${baseUrl}api/users/`,

      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWRkNWUyZjM0ODU2OGM5NjRiZWE0NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDMyMTg5MSwiZXhwIjoxNjUwNTgxMDkxfQ.XTPcIAjStJu54iq9Pur9_DfuSnlLHa7K8a1v3V620r4",
      },
    });
    setAllUsers(json.data.users);
  }
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {}, [allUsers]);
  return (
    <Flex direction="column" pt={{ base: "0px", md: "0px" }}>
      <Authors
        title={"Users"}
        captions={["Author", "UserType", "Config", "Delete"]}
        data={allUsers}
        updateUsers={updateUsers}
      />
    </Flex>
  );
}

export function OrdersTable() {
  let [allOrders, setAllOrders] = useState([]);
  let [error, setError] = useState({ message: "1" });

  function updateOrders(id) {
    setAllOrders(allOrders.filter((order) => id !== order._id));
  }
  async function getOrders() {
    let json = await axios.request({
      method: "get",
      url: `${baseUrl}api/order/`,
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNWRkNWUyZjM0ODU2OGM5NjRiZWE0NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDMyMTg5MSwiZXhwIjoxNjUwNTgxMDkxfQ.XTPcIAjStJu54iq9Pur9_DfuSnlLHa7K8a1v3V620r4",
      },
    });
    if (json.data.orders.length === 0) {
      setError({ message: "there are not orders at the moment" });
    } else {
      setError({ message: "" });
    }
    setAllOrders(json.data.orders);
  }
  useEffect(() => {
    getOrders();
  }, []);
  useEffect(() => {}, [allOrders]);
  return (
    <Flex direction="column" pt={{ base: "0", md: "0" }}>
      {error.message.length > 0 ? (
        <Text>{error.message}</Text>
      ) : (
        <Projects
          title={"Orders"}
          captions={["Name", "Price", "Status"]}
          data={allOrders}
        />
      )}
    </Flex>
  );
}

export function flightsTable() {
  return (
    <Flex direction="column" pt={{ base: "0", md: "0" }}>
      <Flights title={"Flights"}
      captions={['Depature', 'Arrival', 'Price','Date', 'actions']} />
    </Flex>
  );
}
