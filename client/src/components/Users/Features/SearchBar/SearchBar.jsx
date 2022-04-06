import {
  Box,
  Input,
  Button,
  Flex,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getFlights } from "../../../../redux/actions/actions";
import { FaCity } from "react-icons/fa";
import { useColorModeValue } from "@chakra-ui/react";
function SearchBar() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const [input, setInput] = useState({ airline: "", date: "" });
  const [isFocus, setIsFocus] = useState(false);

  function getAfterDate() {
    const sumarDias = (fecha, dias) => {
      fecha.setDate(fecha.getDate() + dias);
      return fecha;
    };

    var f = new Date();

    // console.log(f);

    const semanaDespues = sumarDias(f, 7);

    // console.log(semanaDespues);

    const fechaFinal =
      semanaDespues.getFullYear() +
      "-" +
      ("0" + (semanaDespues.getMonth() + 1)).slice(-2) +
      "-" +
      semanaDespues.getDate();

    return fechaFinal;
  }
  function handlerOnChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  }

  function handler(e) {
    var relation = search.filter(
      (city) => city.nameCity.toLowerCase() === e.target.value.toLowerCase()
    );

    // console.log("CONSOLE",relation[0]["airports"][0]["codeIataAirport"])
    if (relation.length > 0) {
      setInput({
        ...input,
        airline: relation && relation[0]["airports"][0]["codeIataAirport"],
      });
    }
  }

  return (
    <Box>
      <Flex>
        <InputGroup>
          <InputLeftElement children={<Search2Icon opacity="40%" />} />
          <Input
            marginRight="2px"
            width={200}
            bg="white"
            type="text"
            name="airline"
            variant="flushed"
            placeholder="Search a origin..."
            onChange={(e) => handler(e)}
          />
          <Input
            width={200}
            bg="white"
            name="date"
            variant="flushed"
            placeholder="departure"
            type={isFocus ? "date" : "text"}
            onFocus={(e) => {
              setIsFocus(true);
            }}
            onBlur={() => {
              setIsFocus(false);
            }}
            min={getAfterDate()}
            onChange={handlerOnChange}
          />
        </InputGroup>
        <Button
          colorScheme="blue"
          _hover={{ bg: "blue.800", color: "white" }}
          variant="outline"
          onClick={() => dispatch(getFlights(input))}
        >
          {/* <Search2Icon /> */}
          Search!
        </Button>
      </Flex>
    </Box>
  );
}

export default SearchBar;
