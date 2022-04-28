import {
  Button,
  Flex,
  Heading,
  // Link,
  Stack,
  Text,
  useColorModeValue as mode,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowRight } from "react-icons/fa";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from '../../../../context/AuthContext';
// import { calculateTotal } from "../../../../redux/actions/actions";
// import defaultPhoto from "../../../../assets/defaultPhoto.png"
const STRIPE_KEY =
  "pk_test_51KmQZ1Cz6RSCMCCXpRfTNxGgQFkHovBTwCQqgw162K050s9JxuyO4pQQBz70izz0LQeKE29rVsQNZZ5YtjcOT0zc00jGxHBB6r";

  // let cart = JSON.parse(localStorage.getItem("Cart"));

export const CartOrderSummary = ({calculateTotal, tot}) => {
  const toast = useToast();
  // const calculatedTotal = useSelector((state) => state.calculatedTotal);
  const dispatch = useDispatch();
  // const { currentUser } = useAuth()
  const currentUser = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [stripeToken, setStripeToken] = useState();
  const onToken = (token) => {
    setStripeToken(token);
  };
  let [ cartStorage ] = useState(JSON.parse(localStorage.getItem("Cart")));
  let cartDb = useSelector(state => state.cart);

  // useMemo(() => {
  //   console.log("MEMO", tot);
  // }, [tot]);

  useEffect(() => {
    calculateTotal(cartDb);
  }, [cartDb]);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const response = axios.post("http://localhost:3001/api/payments", {
          tokenId: stripeToken.id,
          amount: tot,
        });
        navigate("/success");
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
    // dispatch(calculateTotal());
  }, [stripeToken, navigate, dispatch]);

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>

          <Text fontSize="xl" fontWeight="extrabold">
            {tot}
          </Text>
        </Flex>
      </Stack>

      <div>
        {stripeToken ? (
          <Button
            colorScheme="blue"
            size="lg"
            fontSize="md"
            rightIcon={<FaArrowRight />}
          >
            Processing. Please wait..
          </Button>
        ) : (
          <div>
            {currentUser?.confirmationCode ? (
              <StripeCheckout
                name="Heading North"
                image="https://img.freepik.com/vector-gratis/billetes-avion-blanco_98292-4202.jpg?w=2000"
                billingAddress
                shippingAddress
                description={`Your total is $ ${tot}`}
                amount={(tot) * 100}
                token={onToken}
                stripeKey={STRIPE_KEY}
              >
                <Button
                  colorScheme="blue"
                  size="lg"
                  fontSize="md"
                  rightIcon={<FaArrowRight />}
                >
                  Checkout
                </Button>
              </StripeCheckout>
            ) : (
              <>
                <Button
                  colorScheme="blue"
                  size="lg"
                  fontSize="md"
                  rightIcon={<FaArrowRight />}
                  onClick={() =>
                    toast({
                      description: "You must to be login",
                      status: "error",
                      duration: 3000,
                      isClosable: true,
                    })
                  }
                >
                  Checkout
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </Stack>
  );
};
