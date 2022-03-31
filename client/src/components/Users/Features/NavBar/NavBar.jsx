import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useColorModeValue,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar";
import { FaMoon, FaSun } from 'react-icons/fa'
import LoginModal from "../SignIn/LoginModal";
import RegisterModal from "../SignUp/RegisterModal";
import Navlink from "../UserModal/components/Navlink";

function NavBar() {
  const { toggleColorMode } = useColorMode()
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.700")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={12} alignItems={"center"}>
            <Box>Heading North</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                href={"#"}
              >
                {" "}
                About
              </Link>
            </HStack>
          </HStack>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <SearchBar />
            <LoginModal />
            <RegisterModal />
            <Navlink
              to="/logout"
              name="Logout"
              onClick={async (e) => {
                e.preventDefault();
                // handle logout
                alert("logout user");
              }}
            />

            <IconButton
              variant='outline'
              icon={useColorModeValue(<FaSun />, <FaMoon />)}
              onClick={toggleColorMode}
              aria-label='toggle-dark-mode'
            />
          </Stack>
        </Flex>
      </Box>
    </>
  );
}

export default NavBar;
