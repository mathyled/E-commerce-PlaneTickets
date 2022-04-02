import {
  Flex,
  NumberInputField,
  Button,
  Input,
  Stack,
  Text,
  NumberInput,
  Container,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

function Filters() {
  const [inputs, setInputs] = useState({
    departure: "",
    return: "",
    price: "",
    time: "",
  });
  const [flies, setFlies] = useState([]);
  const parse = (val) => val.replace(/^\$/, "");

  function handleInput(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  return (
    <Stack w="100%" spacing="3px">
      <Container>
        <Text align="left" fontSize="sm">
          Departure
        </Text>
        <Input
          value={inputs.from}
          name="departure"
          type="date"
          onChange={(e) => handleInput(e)}
          _hover={{ borderColor: "teal.400" }}
          size="sm"
          borderColor="teal.200"
          focusBorderColor="teal.600"
          variant="outline"
          placeholder="From"
        />
      </Container>

      <Container>
        <Text align="left" fontSize="sm">
          Return
        </Text>
        <Input
          name="return"
          value={inputs.to}
          onChange={(e) => {
            handleInput(e);
          }}
          type="date"
          _hover={{ borderColor: "teal.400" }}
          size="sm"
          borderColor="teal.200"
          focusBorderColor="teal.600"
          placeholder="To"
        />
      </Container>
      <Container display="inline-block" textAlign="left">
        <Text align="left" fontSize="sm">
          Price
        </Text>
        <InputGroup size="sm">
          <InputLeftAddon children="$" textAlign="right" />
          <NumberInput
            onChange={(priceString) =>
              setInputs({ ...inputs, price: parse(priceString) })
            }
            value={inputs.price}
            min={0}
            width="100%"
            _hover={{ borderColor: "teal.400" }}
            size="sm"
            borderColor="teal.200"
            focusBorderColor="teal.600"
            placeholder="Price"
          >
            <NumberInputField />
          </NumberInput>
        </InputGroup>
      </Container>
      <Container>
        <Text align="left" fontSize="sm">
          Time
        </Text>
        <Input
          type="time"
          name="time"
          onChange={(e) => handleInput(e)}
          _hover={{ borderColor: "teal.400" }}
          size="sm"
          value={inputs.time}
          borderColor="teal.200"
          focusBorderColor="teal.600"
        />
      </Container>
      <Container>
        <Button colorScheme="teal" size="xs" onClick={() => {}}>
          Filter
        </Button>
      </Container>
    </Stack>
  );
}

export default Filters;
