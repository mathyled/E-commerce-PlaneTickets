import {
  chakra,
  Box,
  Image,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdHeadset, MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill, BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";

function Card({ id, origin, destination, price, image }) {
  return (
    <div>
      <Flex
        bg={useColorModeValue("#FFFF", "gray.900")}
        p={5}
        w="full"
        alignItems="center"
        justifyContent="start"
      >
        <Box
          w="sm"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "teal.50",
          }}
          _focus={{
            bg: "teal.50",
          }}
        >
          <Link to={`/detailspage${id}`}>
            <Image
              w="full"
              h={56}
              fit="cover"
              objectPosition="center"
              src={image}
              alt="avatar"
            />
          </Link>

          <Flex alignItems="center" px={6} py={3} bg="gray.900">
            <Icon as={BsFillBriefcaseFill} h={6} w={6} color="white" />

            <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
              Heading North
            </chakra.h1>
          </Flex>

          <Box py={4} px={6}>
            <chakra.h1
              fontSize="xl"
              fontWeight="bold"
              color={useColorModeValue("gray.800", "white")}
            >
              {}
            </chakra.h1>

            {/* <chakra.p py={2} color={useColorModeValue("gray.700", "gray.400")}>
            Full Stack maker & UI / UX Designer , love hip hop music Author of
            Building UI.
          </chakra.p> */}

            <Flex
              alignItems="center"
              mt={4}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={MdLocationOn} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                {origin}
              </chakra.h1>
            </Flex>

            <Flex
              alignItems="center"
              mt={4}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                {destination}
              </chakra.h1>
            </Flex>
            <Flex
              alignItems="center"
              mt={4}
              color={useColorModeValue("gray.700", "gray.200")}
            >
              <Icon as={BsCurrencyDollar} h={6} w={6} mr={2} />

              <chakra.h1 px={2} fontSize="sm">
                {price}
              </chakra.h1>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Card;
