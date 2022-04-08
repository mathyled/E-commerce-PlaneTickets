import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'


import { Layout } from '../../Features/UserModal/components/Layout'
import { CartItem } from './CartItem'
import { CartOrderSummary } from './CartOrderSummary'
import { cartData } from './_data';
import {Link} from "react-router-dom";

const CartPage = ()=>{
  const cart = useSelector(state=> state.cart)
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
          Shopping cart (3 items)
        </Heading>

        <Stack spacing="6">
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
            ))}
        </Stack>
      </Stack>

      <Flex direction="column" align="center" flex="1">
        <CartOrderSummary />
        <HStack mt="6" fontWeight="semibold">
          <p>or</p>
          <Link  to="/home" >Continue searching</Link>
        </HStack>
      </Flex>
    </Stack>
  </Box>
          
            </>

)}

export default CartPage;