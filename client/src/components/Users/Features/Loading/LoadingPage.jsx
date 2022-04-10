import React from "react";
import { Center, Image, Box } from "@chakra-ui/react";
import loading from "../../../../assets/loading.gif";

function LoadingPage() {
  return (
    <Center
      backgroundColor="#fff"
      zIndex="999"
      top={"0"}
      position="absolute"
      w="100vw"
      h="100vh"
    >
      <Image src={loading} />
    </Center>
  );
}

export default LoadingPage;
