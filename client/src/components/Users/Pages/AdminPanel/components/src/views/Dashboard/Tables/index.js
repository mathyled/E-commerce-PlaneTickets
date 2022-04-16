// Chakra imports
import { Flex } from "@chakra-ui/react";
import React from "react";
import Authors from "./components/Authors";
import Projects from "./components/Projects";
import {
  tablesTableData,
  dashboardTableData,
} from "../../../variables/general";

export function userTable() {
  return (
    <Flex direction="column" pt={{ base: "0px", md: "0px" }}>
      <Authors
        title={"Authors Table"}
        captions={["Author", "UserType", "Config"]}
        data={tablesTableData}
      />
    </Flex>
  );
}

export function ordersTable() {
  return (
    <Flex direction="column" pt={{ base: "0", md: "0" }}>
      <Projects
        title={"Orders"}
        captions={["Name", "Price"]}
        data={dashboardTableData}
      />
    </Flex>
  );
}
