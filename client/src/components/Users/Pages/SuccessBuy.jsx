import {
    Box,
    Center,
    Text,
    Stack,
    useColorModeValue,

} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearCart, createFlightOffer, createOrder } from '../../../redux/actions/actions';

export default function SuccessBuy() {
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user);
    const calculatedTotal = useSelector(state => state.calculatedTotal);
    const dispatch = useDispatch();

    useEffect(() => {
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
        dispatch(clearCart());
    });

    return (
        <Center py={6}>
            <Box
                maxW={'545px'}
                w={'full'}
                height={"300px"}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={15}
                margin={150}
                overflow={'hidden'}>
                <Text
                    color={'green.500'}
                    textTransform={'uppercase'}
                    fontWeight={800}
                    fontSize={'3xl'}
                    letterSpacing={1.1}>
                    successful purchase

                </Text>

                <Stack
                    direction={'column'}
                    fontSize={'xx'}
                    margin={90}
                >

                    <Link to="/home" >Continue searching</Link>
                </Stack>
            </Box>
        </Center>
    );
};