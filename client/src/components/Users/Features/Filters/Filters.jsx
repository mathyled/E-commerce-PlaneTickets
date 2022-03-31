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

  useEffect(() => {
    search("new");
  }, []);

  function search(from) {
    const tempUrl = `https://test.api.amadeus.com/v1/reference-data/locations?subType=CITY&keyword=${from}&page%5Blimit%5D=1&page%5Boffset%5D=0&sort=analytics.travelers.score&view=FULL`;
    fetch(tempUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer lAVYc6ufpAwbNa0elXP5ZhrQGTjo",
      },
    })
      .then((Response) => Response.json())
      .then((data) => {
        setFlies(data.data);
        console.log(data.data);
      });
  }

  function filterResults(dep, ret, price, time) {
    let tempFlies = flies;
    if (dep !== "") {
      flies = tempFlies.filter((fly) => fly.property === dep);
    }
    if (ret !== "") {
      flies = tempFlies.filter((fly) => fly.property === ret);
    }
    if (price !== "0" || price !== "") {
      flies = tempFlies.filter((fly) => fly.property === price);
    }
    if (time !== "") {
      flies = tempFlies.filter((fly) => fly.property === time);
    }
    console.log(flies);
  }

  function handleInput(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  return (
    <Flex h="calc(100vh - 100px)" maxW="300px" bg="gray.50" p="10px">
      <Stack w="100%" spacing="10px">
        <Container>
          <Text align="left" fontSize="lg">
            Departure
          </Text>
          <Input
            value={inputs.from}
            name="departure"
            type="date"
            onChange={(e) => handleInput(e)}
            _hover={{ borderColor: "teal.400" }}
            borderColor="teal.200"
            focusBorderColor="teal.600"
            variant="outline"
            placeholder="From"
          />
        </Container>
        <Container>
          <Text align="left" fontSize="lg">
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
            borderColor="teal.200"
            focusBorderColor="teal.600"
            placeholder="To"
          />
        </Container>
        <Container>
          <Text align="left" fontSize="lg">
            Price
          </Text>
          <InputGroup>
            <InputLeftAddon children="$" />
            <NumberInput
              onChange={(priceString) =>
                setInputs({ ...inputs, price: parse(priceString) })
              }
              value={inputs.price}
              min={0}
              _hover={{ borderColor: "teal.400" }}
              borderColor="teal.200"
              focusBorderColor="teal.600"
              placeholder="Price"
            >
              <NumberInputField />
            </NumberInput>
          </InputGroup>
        </Container>
        <Container>
          <Text align="left" fontSize="lg">
            Time
          </Text>
          <Input
            type="time"
            name="time"
            onChange={(e) => handleInput(e)}
            _hover={{ borderColor: "teal.400" }}
            value={inputs.time}
            borderColor="teal.200"
            focusBorderColor="teal.600"
          />
        </Container>
        <Container>
          <Button
            colorScheme="teal"
            size="xs"
            onClick={() => {
              filterResults(
                inputs.departure,
                inputs.return,
                inputs.price,
                inputs.time
              );
            }}
          >
            Filter
          </Button>
        </Container>
      </Stack>
    </Flex>
  );
}

export default Filters;
