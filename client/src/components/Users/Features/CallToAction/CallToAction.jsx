import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Center,
  //   Button,
  Image,
  //   Icon,
  //   IconButton,
  //   createIcon,
  //   IconProps,
  //   useColorModeValue,
} from "@chakra-ui/react";

function CallToAction() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 20 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 3, md: 7 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "60%",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "teal.400",
                zIndex: -1,
              }}
            >
              Welcome to
            </Text>
            <br />
            <Text as={"span"} color={"teal.400"}>
              Heading North!
            </Text>
          </Heading>
          <Center width="100%">
            <Text color={"gray.500"} width="60%">
              A place where you can find your next destination with many prices
              and places posibilities that adjust to your needs or money. You're
              just a click away to live new adventures and memories with all
              your loved ones
            </Text>
          </Center>
        </Stack>
      </Stack>
    </Container>
  );
}

export default CallToAction;
