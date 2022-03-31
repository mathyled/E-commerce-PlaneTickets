import {
  Box,
  Input,
  Button,
  Flex,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
function SearchBar() {
  return (
    <Box>
      <Flex>
        <InputGroup>
          <InputLeftElement children={<Search2Icon opacity="40%"/>} />
          <Input
            width={400}
            bg="white"
            type="text"
            name="destination"
            placeholder="Search a destination..."
          />
        </InputGroup>
        <Button
          colorScheme="blue"
          _hover={{ bg: "blue.800", color: "white" }}
          variant="outline"
        >
          {/* <Search2Icon /> */}
          Search!
        </Button>
      </Flex>
    </Box>
  );
}

export default SearchBar;
