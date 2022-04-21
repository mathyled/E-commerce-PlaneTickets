import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";
import WithSubnavigation from "../../Features/NavBar";

const NotfoundPage = () => {
  let imgUrl =
    "https://images.unsplash.com/photo-1548957175-84f0f9af659e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJpZW5kcyUyMHRyYXZlbHxlbnwwfHwwfHw%3D&w=1000&q=80";
  return (
    <div>
      <WithSubnavigation  />
      <Box
        pos={"absolute"}
        overflow="hidden"
        zIndex="-5"
        w="100%"
        h="100%"
        top="0"
        backgroundColor={"#fff"}
      >
        <Box
          width={"100%"}
          h="100%"
          backgroundColor={"#fff"}
          opacity="0.4"
        ></Box>
        <Image
          w="100%"
          h={"100%"}
          top={"0"}
          zIndex="-5"
          position={"absolute"}
          src={imgUrl}
        />
      </Box>

      <Container maxW={"7xl"} p="12">
        <Heading as="h1">Heading North</Heading>

        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">Mission</Heading>
          <Text as="p" fontSize="lg">
            Help every day more and more people to find the way...
          </Text>
          <Heading as="h2">Values</Heading>
          <Text as="p" fontSize="lg">
            Created for friends, by proffesional friends, shared with you.
          </Text>
          <Heading as="h2">Target Market</Heading>
          <Text as="p" fontSize="lg">
            Any with a dreamed place, duties, the will or need to go beyond.
          </Text>
          <Heading as="h2">History</Heading>
          <Text as="p" fontSize="lg">
            Born in 2022 as product of the final project of the Full Stack Web
            Delopment carrer ruled by HENRY, 8 developers decided to honor their
            effort bringing this project to the comunnity.
            <br></br>8 Developers, differents skilss, differents ages and place
            of origin, but with respect, passion and comminment as the common
            personality traits of the group.
            <br></br>We are looking for help people to find the best way to
            reach their dreamed place, accomplished duties, or just visit a
            friend or family.
            <br></br>Always waiting to hear about the costumer experience in our
            site in order to improve it, and always trying to set heading north
            and go beyond that.
          </Text>
        </VStack>
      </Container>
    </div>
  );
};

export default NotfoundPage;
