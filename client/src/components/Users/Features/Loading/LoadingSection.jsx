import React from "react";
import { Center, Image, Box, Text } from "@chakra-ui/react";
import loadingImg from "../../../../assets/flying-airplane.gif";

function LoadingSection() {
  return (
    <Center
      backgroundColor="#fff"
      zIndex="999"
      top={"-90px"}
      position="relative"
      w="100vw"
    >
      <Box>
        <Image boxSize="150px" src={loadingImg} />
        <Text top={"-20px"} position="relative">
          Loading...
        </Text>
      </Box>
    </Center>
  );
}

export default LoadingSection;
