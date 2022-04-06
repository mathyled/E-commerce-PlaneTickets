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
import { useSelector, useDispatch } from "react-redux";
import { sortTickets } from "../../../../redux/actions/actions";
import { MdOutlineAirplanemodeActive } from "react-icons/md";

import { useState, useEffect } from "react";

function Order() {
  const [inputs, setInputs] = useState({
    to: false,
    ascending: true,
    price: false,
    schedule: false,
  });

  const dispatch = useDispatch();

  function handleRadio(e) {
    e.target.checked = !inputs[e.target.name];
    setInputs({ ...inputs, [e.target.name]: e.target.checked });
  }

  return (
    <Stack w="100%" spacing="3px">
      <Container textAlign="left" padding="0 65px">
        <Radio
          size="sm"
          name="to"
          onChange={(e) => handleRadio(e)}
          isChecked={inputs.to ? 1 : 0}
          borderColor="#A0AEC0 !important"
        >
          To
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
          name="schedule"
          onChange={(e) => handleRadio(e)}
          isChecked={inputs.schedule ? 1 : 0}
          borderColor="#A0AEC0 !important"
        >
          schedule
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
        <Button
          colorScheme="teal"
          size="xs"
          onClick={() => {
            dispatch(
              sortTickets(
                inputs.to,
                inputs.price,
                inputs.schedule,
                inputs.ascending
              )
            );
          }}
        >
          Order
        </Button>
      </Container>
    </Stack>
  );
}

export default Order;
