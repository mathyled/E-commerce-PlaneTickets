import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getOfferDetails,
  resetStates,
} from "../../../../redux/actions/actions";

import NavBar from "../../Features/NavBar/NavBar";
import { MdLocalShipping } from "react-icons/md";
import pictures from "../../Features/pictures.json";

export default function Details() {
  const dispatch = useDispatch();
  const { id } = useParams();
  let cityDetails = [];
  let cityDetailsTwo = useSelector((state) => state.city_details);
  cityDetails.push(cityDetailsTwo);
  console.log(id);

  useEffect(() => {
    dispatch(getOfferDetails(id));
    return () => dispatch(resetStates());
  }, [id, dispatch]);

  console.log(cityDetails[0]);
  // console.log(cityDetails[0].itineraries[0].segments[0].departure.iataCode);

  function getImages(localLettersId) {
    let imagen;
    for (let i = 0; i < pictures.length; i++) {
      if (pictures[i].hasOwnProperty(`image${localLettersId}`)) {
        imagen = pictures[i][`image${localLettersId}`];
      }
    }
    return imagen;
  }

  const imageUrl = "";
  //cityDetails[0]?.itineraries[0]?.segments[0]?.departure?.iataCode;
  console.log(imageUrl);
  return (
    <div>
      {cityDetails.length > 0 ? (
        <div>
          <NavBar />
          <Container maxW={"7xl"}>
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              spacing={{ base: 5, md: 10 }}
              py={{ base: 10, md: 15 }}
            >
              <Flex>
                <Image
                  rounded={"md"}
                  alt={"product image"}
                  src={
                    "a"
                    // getImages(imageUrl)
                    //cityDetails[0].itineraries[0].segments[0].departure.iataCode
                  }
                  fit={"cover"}
                  align={"center"}
                  w={"100%"}
                  h={{ base: "100%", sm: "400px", lg: "500px" }}
                />
              </Flex>
              <Stack spacing={{ base: 6, md: 10 }}>
                <Box as={"header"}>
                  <Heading
                    lineHeight={1.1}
                    fontWeight={600}
                    fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                  >
                    {cityDetails[0]["nameCity"]}
                  </Heading>
                  <Text
                    color={
                      /*useColorModeValue("gray.900", "gray.400")*/ "gray.900"
                    }
                    fontWeight={300}
                    fontSize={"2xl"}
                  >
                    {cityDetails[0]["price"] + "EUR"}
                  </Text>
                </Box>

                <Stack
                  spacing={{ base: 4, sm: 6 }}
                  direction={"column"}
                  divider={
                    <StackDivider
                      borderColor={
                        /*useColorModeValue("gray.200", "gray.600")*/ "gray.200"
                      }
                    />
                  }
                >
                  <Box>
                    <Text
                      fontSize={{ base: "16px", lg: "18px" }}
                      color={
                        /*useColorModeValue("teal.500", "teal.300")*/ "teal.500"
                      }
                      fontWeight={"500"}
                      textTransform={"uppercase"}
                      mb={"4"}
                    >
                      Product Details
                    </Text>

                    <List spacing={2}>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Between lugs:
                        </Text>{" "}
                        20 mm
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Bracelet:
                        </Text>{" "}
                        leather strap
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Case:
                        </Text>{" "}
                        Steel
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Case diameter:
                        </Text>{" "}
                        42 mm
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Dial color:
                        </Text>{" "}
                        Black
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Crystal:
                        </Text>{" "}
                        Domed, scratch‑resistant sapphire crystal with
                        anti‑reflective treatment inside
                      </ListItem>
                      <ListItem>
                        <Text as={"span"} fontWeight={"bold"}>
                          Water resistance:
                        </Text>{" "}
                        5 bar (50 metres / 167 feet){" "}
                      </ListItem>
                    </List>
                  </Box>
                </Stack>

                <Button
                  rounded={"none"}
                  w={"full"}
                  mt={8}
                  size={"lg"}
                  py={"7"}
                  bg={/*useColorModeValue("gray.900", "gray.50")*/ "gray.900"}
                  color={/*useColorModeValue("white", "gray.900")*/ "white"}
                  textTransform={"uppercase"}
                  _hover={{
                    transform: "translateY(2px)",
                    boxShadow: "lg",
                  }}
                >
                  Add to cart
                </Button>
              </Stack>
            </SimpleGrid>
          </Container>
        </div>
      ) : (
        <div>LOADING</div>
      )}
    </div>
  );
}
