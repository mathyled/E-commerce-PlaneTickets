import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useColorModeValue,
  useColorMode,
  Stack,
  Button,
} from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar";
import { FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "../SignIn/LoginModal";
import RegisterModal from "../SignUp/RegisterModal";
import Navlink from "../UserModal/components/Navlink";
import { MdTravelExplore } from "react-icons/md";
import { useAuth } from "../../../../context/AuthContext";
import FilterModal from "../FilterModal";
// import { getOffers } from "../../../../redux/actions/actions";
import { useDispatch } from "react-redux";
import UserMenu from "../UserMenu";
import Cart from "../Cart";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const { toggleColorMode } = useColorMode();
  const { currentUser, logout } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function handlerLogOut(e) {
    e.preventDefault();
    // handle logout
    logout();
  }

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.700")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={12} alignItems={"center"}>
            <Box>
              <Navlink
                to="/home"
                name="Heading North"
                // onClick={() => dispatch(getOffers("MAD"))}
              />
            </Box>

            <HStack
              as={"nav"}
              spacing={6}
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

              {currentUser && (
                <Navlink to="/new-flight" name=" New flight plan" />
              )}

              <FilterModal />
            </HStack>
          </HStack>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <SearchBar />

            {!currentUser && <LoginModal />}
            {!currentUser && <RegisterModal />}

            {/* {currentUser && <Navlink to="/profile" name="Profile" />} */}
            {currentUser && (
              <UserMenu
                logout={handlerLogOut}
                myPlans={() => navigate("/my-plans")}
                photo={currentUser.photoURL}
                name={currentUser.displayName}
              />
            )}
            {/* {currentUser && < Navlink
              to="/logout"
              name="Logout"
              onClick={async (e) => {
                e.preventDefault();
                // handle logout
                logout()
              }}
            />} */}
            <Link
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              href={"/cart"}
            >
              <Cart />
            </Link>
            <IconButton
              variant="outline"
              icon={useColorModeValue(<FaSun />, <FaMoon />)}
              onClick={toggleColorMode}
              aria-label="toggle-dark-mode"
            />
          </Stack>
        </Flex>
      </Box>
    </>
  );
}

export default NavBar;
