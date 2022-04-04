import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
function Sidebar({ children }) {
  return (
    <Flex
      minH="calc(100vh - 67px)"
      bg={useColorModeValue("gray.50", "gray.900")}
      maxW="300px"
      minW="210px"
      p="6px 0px"
      direction="column"
    >
      {children}
    </Flex>
  );
}

export default Sidebar;
