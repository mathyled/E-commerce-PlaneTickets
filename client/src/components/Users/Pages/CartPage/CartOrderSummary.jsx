import {
  Button,
  Flex,
  Heading,
  // Link,
  Stack,
  Text,
  useColorModeValue as mode,
  useToast,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { FaArrowRight } from 'react-icons/fa'
import StripeCheckout from 'react-stripe-checkout'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../../../context/AuthContext';
import { calculateTotal, createFlightOffer, createOrder } from '../../../../redux/actions/actions';
// import defaultPhoto from "../../../../assets/defaultPhoto.png"
const STRIPE_KEY = "pk_test_51KmQZ1Cz6RSCMCCXpRfTNxGgQFkHovBTwCQqgw162K050s9JxuyO4pQQBz70izz0LQeKE29rVsQNZZ5YtjcOT0zc00jGxHBB6r"

export const CartOrderSummary = () => {
  const toast = useToast()
  const user = useSelector(state => state.user)
  const cart = useSelector(state => state.cart)
  const calculatedTotal = useSelector(state => state.calculatedTotal);
  const dispatch = useDispatch();
  // const { currentUser } = useAuth()
  const currentUser = useSelector(state => state.user);
  const navigate = useNavigate()
  const [stripeToken, setStripeToken] = useState()
  const onToken = (token) => {
    setStripeToken(token)
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = axios.post("http://localhost:3001/api/payments", {
          tokenId: stripeToken.id,
          amount: 2000
        }
        );
        navigate("/success")
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    stripeToken && makeRequest()
    dispatch(calculateTotal());
  }, [stripeToken, navigate, dispatch])

  function relation(e) {
    e.preventDefault();
    let prod = [];
    for(let i = 0; i < cart.length; i++) {
      let offer = {
        id: cart[i]._id,
        weekday: cart[i].weekday,
        departure: cart[i].departure,
        arrival: cart[i].arrival,
        aircraft: cart[i].aircraft,
        airline: cart[i].airline,
        flight: cart[i].flight,
        codeshared: cart[i].codeshared,
        date: cart[i].date,
        price: cart[i].price,
      };
      dispatch(createFlightOffer(offer));
      prod.push({product: cart[i]._id, quantity: cart[i].quantity});
    };
    let order = {
      userId: user._id,
      username: user.username,
      products: prod,
      amount: calculatedTotal,
    };
    dispatch(createOrder(order));
  };

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">

        <Flex justify="space-between">

          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>

          <Text fontSize="xl" fontWeight="extrabold">
            {calculatedTotal}
          </Text>

        </Flex>

      </Stack>

      <div>
        {
          stripeToken ? (

            <Button
              colorScheme="blue"
              size="lg" fontSize="md"
              rightIcon={<FaArrowRight
              />}>
              Processing. Please wait..
            </Button>

          ) : (
            <div>

              {currentUser.accessToken ?
                <StripeCheckout
                  name="Heading North"
                  image="https://img.freepik.com/vector-gratis/billetes-avion-blanco_98292-4202.jpg?w=2000"
                  billingAddress
                  shippingAddress
                  description={`Your total is $ ${calculatedTotal}`}
                  amount={calculatedTotal *100}
                  token={onToken}
                  stripeKey={STRIPE_KEY}
                >

                  <Button colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />} onClick={relation}>
                    Checkout
                  </Button>

                </StripeCheckout>
                :
                <>
                  <Button
                    colorScheme="blue"
                    size="lg" fontSize="md"
                    rightIcon={<FaArrowRight />}
                    onClick={() =>
                      toast({
                        description: "You must to be login",
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                      })}
                  >
                    Checkout
                  </Button>

                </>
              }
            </div>
          )}
      </div>

    </Stack>
  )
}
