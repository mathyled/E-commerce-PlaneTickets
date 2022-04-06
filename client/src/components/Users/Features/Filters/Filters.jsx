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
import { useDispatch } from "react-redux";
import { filterTickets } from "../../../../redux/actions/actions";

function Filters() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    to: "",
    airline: "",
  });
  const parse = (val) => val.replace(/^\$/, "");
  const [isFocus, setIsFocus] = useState(false);
  function handleInput(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  return (
    <Stack w="100%" spacing="3px">
      <Container>
        <Text align="left" fontSize="sm">
          destination
        </Text>
        <Input
          value={inputs.to}
          name="to"
          placeholder="to..."
          type={isFocus ? "date" : "text"}
          onFocus={(e) => {
            setIsFocus(true);
          }}
          onBlur={() => {
            setIsFocus(false);
          }}
          onChange={(e) => handleInput(e)}
          _hover={{ borderColor: "teal.400" }}
          size="sm"
          borderColor="teal.200"
          focusBorderColor="teal.600"
          variant="outline"
        />
      </Container>

      <Container>
        <Text align="left" fontSize="sm">
          Airline
        </Text>
        <Input
          name="airline"
          value={inputs.airline}
          onChange={(e) => {
            handleInput(e);
          }}
          type="text"
          _hover={{ borderColor: "teal.400" }}
          size="sm"
          borderColor="teal.200"
          focusBorderColor="teal.600"
          placeholder="insert airline..."
        />
      </Container>

      <Container>
        <Button
          colorScheme="teal"
          size="xs"
          onClick={() => {
            dispatch(filterTickets(inputs.to, inputs.airline));
          }}
        >
          Filter
        </Button>
      </Container>
    </Stack>
  );
}

export default Filters;
