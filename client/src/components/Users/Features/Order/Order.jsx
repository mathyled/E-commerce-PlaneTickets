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
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

function Order() {
  const [inputs, setInputs] = useState({
    category: false,
    ascending: true,
    price: false,
    time: false,
  });

  function handleRadio(e) {
    e.target.checked = !inputs[e.target.name];
    setInputs({ ...inputs, [e.target.name]: e.target.checked });
  }

  return (
    <Stack w="100%" spacing="3px">
      <Container textAlign="left" padding="0 65px">
        <Radio
          size="sm"
          name="category"
          onChange={(e) => handleRadio(e)}
          isChecked={inputs.category ? 1 : 0}
          borderColor="#A0AEC0 !important"
        >
          Category
        </Radio>
      </Container>

      <Container textAlign="left" padding="0 65px">
        <Radio
          size="sm"
          name="price"
          onChange={(e) => handleRadio(e)}
          isChecked={inputs.price ? 1 : 0}
          borderColor="#A0AEC0 !important"
        >
          Price
        </Radio>
      </Container>
      <Container textAlign="left" padding="0 65px">
        <Radio
          size="sm"
          name="time"
          onChange={(e) => handleRadio(e)}
          isChecked={inputs.time ? 1 : 0}
          borderColor="#A0AEC0 !important"
        >
          Time
        </Radio>
      </Container>
      <Container>
        <Text fontWeight="medium">Sort type</Text>
        <Container textAlign="center" py="10px">
          <Stack direction="row">
            <Radio
              size="sm"
              name="ascending"
              onChange={(e) => handleRadio(e)}
              isChecked={inputs.ascending ? 1 : 0}
              borderColor="#A0AEC0 !important"
            >
              Ascending
            </Radio>
            <Radio
              size="sm"
              name="ascending"
              onChange={(e) => handleRadio(e)}
              isChecked={inputs.ascending ? 0 : 1}
              borderColor="#A0AEC0 !important"
            >
              Descending
            </Radio>
          </Stack>
        </Container>
        <Button colorScheme="teal" size="xs" onClick={() => {}}>
          Order
        </Button>
      </Container>
    </Stack>
  );
}

export default Order;
