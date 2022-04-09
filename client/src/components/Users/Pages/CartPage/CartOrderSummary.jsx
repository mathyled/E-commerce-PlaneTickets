import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import StripeCheckout from 'react-stripe-checkout'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
const STRIPE_KEY = "pk_test_51KmQZ1Cz6RSCMCCXpRfTNxGgQFkHovBTwCQqgw162K050s9JxuyO4pQQBz70izz0LQeKE29rVsQNZZ5YtjcOT0zc00jGxHBB6r"


const OrderSummaryItem = (props) => {
  const { label, value, children } = props
  return (
    <>
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
    </>
  )
};


export const CartOrderSummary = () => {
  const navigate = useNavigate()
  const [stripeToken,setStripeToken] = useState()
  const onToken= (token)=>{
      setStripeToken(token)
  }

  useEffect(()=>{
      const makeRequest= async() =>{
          try {
             const response = axios.post("http://localhost:3001/api/payments",{
                 tokenId:stripeToken.id,
                 amount:2000
                }
                );
                navigate("/success")
             console.log(response.data)
          } catch (error) {
              console.log(error)
          }
      }
      stripeToken && makeRequest()
  },[stripeToken,navigate])
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={597} />
        <OrderSummaryItem label="Shipping + Tax">
          <Link href="#" textDecor="underline">
            Calculate shipping
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Link href="#" textDecor="underline">
            Add coupon code
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {597}
          </Text>
        </Flex>
      </Stack>
      <StripeCheckout 
            name="Heading North" 
            image="#"
            billingAddress
            shippingAddress
            description=" Your total is $ 73"
            amount={2000}
            token={onToken}
            stripeKey={STRIPE_KEY}
            >

      <Button colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
        Checkout
      </Button>
            </StripeCheckout>

    </Stack>
  )
}
