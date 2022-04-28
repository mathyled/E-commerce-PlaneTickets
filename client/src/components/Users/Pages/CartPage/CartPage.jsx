import {
  Box,
  // Container,
  Flex,
  Heading,
  HStack,
  Stack,
  // SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'

// import { useDispatch, useSelector } from 'react-redux'
// import { Layout } from '../../Features/UserModal/components/Layout'
import { CartItem } from './CartItem'
import { CartOrderSummary } from './CartOrderSummary'
import {Link} from "react-router-dom";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity } from '../../../../redux/actions/actions';

const CartPage = ()=>{
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user);
  let cartDb = useSelector(state => state.cart);
  let [ cartStorage ] = useState(JSON.parse(localStorage.getItem("Cart")));
  const [ tot, setTot ] = useState(0);

  function updateQuantityDb(e) {
    dispatch(updateQuantity(currentUser._id, { cart: cartDb, id: e.target.id, quantity: e.target.value }));
  };

  function updateQuantityStorage(cart, id, quantity) {
    const cartCopy = cart;
    let pos = cartCopy.map(e => e._id).indexOf(id);
    let itemchange = cartCopy[pos];
    itemchange.quantity = quantity;
    itemchange.total = itemchange.price * quantity;
    cartCopy[pos] = itemchange;
    return cartCopy;
  };

  function calculateTotal(cart) {
    console.log("funcion");
    let total = 0;
    if (cart.length > 0) {
      total = cart.reduce((prev, next) => prev + next.total, 0);
    };
    setTot(total);
  };

  return(
  <>
    <Box
      bg={useColorModeValue("white", "gray.800")}
      shadow="xl"
      maxW={{
        base: '3xl',
        lg: '7xl',
      }}
      mx="auto"
      px={{
        base: '4',
        md: '8',
        lg: '12',
      }}
      py={{
        base: '6',
        md: '8',
        lg: '100',
      }}
    >

      {currentUser?.email ?

        cartDb?.length > 0 ?

        <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          align={{
            lg: 'flex-start',
          }}
          spacing={{
            base: '8',
            md: '16',
          }}
        >

          <Stack
            spacing={{
              base: '8',
              md: '10',
            }}
            flex="2"
          >

            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping cart {cartDb.length} items
            </Heading>

            {/* <Stack spacing="6" onChange={e => {updateQuantityDb(cartDb, e.target.id, e.target.value)}}> */}
            <Stack spacing="6" onChange={e => {updateQuantityDb(e)}}>
              {cartDb.map((item, i) => (
                <CartItem key={i} {...item} calculateTotal={calculateTotal} tot={tot} />
              ))}
            </Stack>

          </Stack>

          <Flex direction="column" align="center" flex="1">

            <CartOrderSummary calculateTotal={calculateTotal} tot={tot} />

            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link to="/home">Continue searching</Link>
            </HStack>

          </Flex>
        </Stack>
      :
        <div>

          <Link to="/home">
            <button>Go to Home</button>
          </Link>
          <p>No items</p>

        </div>
    :
      cartStorage?.length > 0 ?

        <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          align={{
            lg: 'flex-start',
          }}
          spacing={{
            base: '8',
            md: '16',
          }}
        >

          <Stack
            spacing={{
              base: '8',
              md: '10',
            }}
            flex="2"
          >

            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping cart {cartStorage.length} items
            </Heading>

            <Stack spacing="6" onChange={e => window.localStorage.setItem("Cart", JSON.stringify(cartStorage = updateQuantityStorage(cartStorage, e.target.id, e.target.value)))}>
              {cartStorage.map((item, i) => (
                <CartItem key={i} {...item} />
              ))}
            </Stack>

          </Stack>

          <Flex direction="column" align="center" flex="1">

            <CartOrderSummary />

            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link to="/home">Continue searching</Link>
            </HStack>

          </Flex>
        </Stack>
      :
        <div>

          <Link to="/home">
            <button>Go to Home</button>
          </Link>
          <p>No items</p>

        </div>
      }

    </Box>
  </>
)}

export default CartPage;