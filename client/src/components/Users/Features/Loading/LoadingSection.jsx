import React from "react";
import { Center, Image, Box, Text, useColorMode } from "@chakra-ui/react";
import loadingLightImg from "../../../../assets/transparency-onlinegiftools.gif";
import loadingDarkImg from "../../../../assets/darkmode-gif.gif";

function LoadingSection() {
  const { colorMode } = useColorMode();
  return (
    <Center zIndex="999" top={"-60px"} position="relative" w="100vw">
      <Box>
        <Image
          boxSize="150px"
          filter={colorMode === "light" ? "" : "invert(1)"}
          src={loadingLightImg}
        />
        <Text top={"-20px"} position="relative">
          Loading...
        </Text>
      </Box>
    </Center>
  );
}

export default LoadingSection;
