import {
  useColorModeValue,
  VStack,
  Container,
  Heading,
  InputGroup,
  List,
  InputLeftAddon,
  Input,
  Flex,
  Button,
  ListItem,
  Text,
} from "@chakra-ui/react";

function Checkout() {
  return (
    <div>
      <Flex
        gap="20px"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <VStack
          borderRadius="5px"
          padding="20px"
          bg={useColorModeValue("gray.200", "gray.700")}
        >
          <Heading>Description</Heading>
          <List>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Price:
              </Text>{" "}
              0
            </ListItem>
          </List>
        </VStack>
        <VStack
          w="500px"
          padding="20px"
          bg={useColorModeValue("gray.200", "gray.700")}
        >
          <Heading>Pay with card</Heading>
          <InputGroup>
            <InputLeftAddon children="✉" />
            <Input type="tel" placeholder="Email" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="👦" />
            <Input type="tel" placeholder="Name on card" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children="💳" />
            <Input type="tel" placeholder="Card number" />
          </InputGroup>
          <Button w="100%" colorScheme="teal">
            Pay
          </Button>
        </VStack>
      </Flex>
    </div>
  );
}

export default Checkout;
