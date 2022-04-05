import {
  Box,
  Input,
  Button,
  Flex,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import {getFlights} from "../../../../redux/actions/actions"
import { FaCity } from "react-icons/fa";
function SearchBar() {
  const dispatch = useDispatch()
  const search =  useSelector(state=> state.search)
 const [input,setInput] =  useState({airline:"", date:""})
   function handlerOnChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        console.log(input)
      }

   function handler(e){

var relation = search.filter((city) => city.nameCity.toLowerCase() ===  e.target.value.toLowerCase()  ) 
    //  return  relation.airport[0].iataCode
    console.log("CONSOLE",relation[0]["airports"][0]["codeIataAirport"])
    setInput({
      ...input,
      airline:relation[0]["airports"][0]["codeIataAirport"]
    })

   }


  return (
    <Box>
      <Flex>
        <InputGroup>
          <InputLeftElement children={<Search2Icon opacity="40%"/>} />
          <Input
            width={400}
            bg="white"
            type="text"
            name="airline"
            placeholder="Search a origin..."
          onChange={e=>handler(e)}
          />
                 <Input
            width={400}
            bg="white"
            type="date"
            name="date"
          
            min="2022-04-13"
            onChange={handlerOnChange}
          />
        </InputGroup>
        <Button
          colorScheme="blue"
          _hover={{ bg: "blue.800", color: "white" }}
          variant="outline"
          onClick={()=> dispatch(getFlights(input))}
        >
          {/* <Search2Icon /> */}
          Search!
        </Button>
      </Flex>
    </Box>
  );
}

export default SearchBar;
