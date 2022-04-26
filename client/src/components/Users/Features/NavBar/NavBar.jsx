import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useColorMode,
  Stack,
  // Button,
} from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar";
import { FaMoon, FaSun } from "react-icons/fa";
import LoginModal from "../SignIn/LoginModal";
import RegisterModal from "../SignUp/RegisterModal";
import Navlink from "../UserModal/components/Navlink";
import FilterModal from "../FilterModal";
import { getBackUpState } from "../../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import UserMenu from "../UserMenu";
import Cart from "../Cart";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { logOut } from "../../../../redux/actions/actions";

function NavBar({ user }) {
  // const[cartCount,setCartCount] = useState(0)

  const cart = useSelector((state) => state.cart);
  const [actualUser, setActualUser] = useState({});
  const currentUser = useSelector((state) => state.user);
  const { toggleColorMode } = useColorMode();

  // const { currentUser, logout } = useAuth()
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const cUser = JSON.parse(localStorage.getItem("User"));
    setActualUser(cUser);
  }, []);
  async function handlerLogOut(e) {
    e.preventDefault();
    // handle logout
    dispatch(logOut());
    localStorage.clear("User");
  }

  // const cart = useSelector(state=> state.cart)
  // const currentUser = useSelector(state=> state.user)
  // const { toggleColorMode } = useColorMode()

  // const { currentUser, logout } = useAuth()
  // const dispatch = useDispatch()

  // const navigate = useNavigate()
  // async function handlerLogOut(e) {
  //   e.preventDefault();
  //   // handle logout
  //   dispatch(logOut())
  //   localStorage.clear("User")
  // }

  // useEffect(()=>{
  //   let count = 0;
  //   cart.forEach(item=>{
  //     count+= item.quantity
  //   })
  // },[cart])

  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={12} alignItems={"center"}>
          {/* <Box>
              <Navlink
                to="/home"
                name="Heading North"
                onClick={() => dispatch(getBackUpState())}
              />
            </Box> */}

          <HStack as={"nav"} spacing={6} display={{ base: "none", md: "flex" }}>
            <Link to="/about"> About</Link>

            {/* <Link
                to="/about"
              >
                {" "}
                About
              </Link> */}

            {/* {currentUser?.confirmationCode?.length > 0  && (

                <Navlink to="/new-flight" name=" New flight plan" />
              )} */}

            {/* <FilterModal /> */}
          </HStack>
        </HStack>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <SearchBar />

          {!actualUser?.confirmationCode?.length > 0 &&
            !actualUser?.confirmationCode?.length > 0 && <LoginModal />}
          {!actualUser?.confirmationCode?.length > 0 &&
            !actualUser?.confirmationCode?.length > 0 && <RegisterModal />}

          {/* {currentUser && <Navlink to="/profile" name="Profile" />} */}
          {actualUser?.confirmationCode?.length > 0 && (
            //           {/* <SearchBar /> */}

            /* 
            {!currentUser?.confirmationCode?.length > 0 && !user?.confirmationCode?.length > 0 &&<LoginModal />}
            {!currentUser?.confirmationCode?.length > 0  && !user?.confirmationCode?.length > 0&&<RegisterModal />} */

            //{/* {currentUser && <Navlink to="/profile" name="Profile" />} */}
            //{/* { currentUser?.confirmationCode?.length > 0  && (

            // <UserMenu
            // logout={handlerLogOut}
            //isAdmin={actualUser?.isAdmin}
            //sendToFavorites={() => navigate("/favorite")}
            // sendToPanelAdmin={() => navigate("/admin")}
            // myPlans={() => navigate("/my-plans")}
            //  photo={actualUser?.photoURL}
            //    name={actualUser?.username || actualUser?.username}
            //  />
            // )} */}
            // //{/* {currentUser && < Navlink
            //   to="/logout"
            //   name="Logout"
            //   onClick={async (e) => {
            //     e.preventDefault();
            //     // handle logout
            //     logout()
            //   }}
            // />} */}
            // {/* <Link
            //   px={2}
            //   py={1}
            //   rounded={"md"}
            //   _hover={{
            //     textDecoration: "none",
            //     bg: useColorModeValue("gray.200", "gray.700"),
            //   }}
            //   href={"/cart"}
            // >
            //   <Cart  quantity={cartCount}/>
            // </Link> */}

            <Link to="/cart">
              <Cart quantity={cart.length} />
            </Link>

            //  {/* <Link to="/cart">
            //  <Cart quantity={cart.length}/>
            //  </Link>

            // <IconButton
            //   variant="outline"
            //   icon={useColorModeValue(<FaSun />, <FaMoon />)}
            //   onClick={toggleColorMode}
            //   aria-label="toggle-dark-mode"
            // /> */}
          )}
        </Stack>
      </Flex>
    </Box>
  );
}

export default NavBar;
