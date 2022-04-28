import { CloseButton, Flex, Select, useColorModeValue } from '@chakra-ui/react'

import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../../../redux/actions/actions'

const QuantitySelect = (props) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      {...props}
    >
      <option id={props.id} name={props.name} value="1">1</option>
      <option id={props.id} name={props.name} value="2">2</option>
      <option id={props.id} name={props.name} value="3">3</option>
      <option id={props.id} name={props.name} value="4">4</option>
      <option id={props.id} name={props.name} value="5">5</option>
      <option id={props.id} name={props.name} value="6">6</option>
    </Select>
  )
};

export const CartItem = (props) => {
  const dispatch = useDispatch();
  const {
    _id,
    price,
    arrival,
    departure,
    quantity,
    calculateTotal,
    tot,
  } = props;
  let [qtySelect, setQtySelect] = useState(quantity);
  let [ cartStorage ] = useState(JSON.parse(localStorage.getItem("Cart")));
  const cartDb = useSelector(state => state.cart);
  const currentUser = useSelector(state => state.user);

  useEffect(() => {
    setQtySelect(quantity);
  }, [dispatch, quantity]);
  useEffect(() => {
    calculateTotal(cartDb)
  }, []);

  useEffect(() => {
  }, [tot]);

  function onChangeQuantity(e) {
    setQtySelect(e.target.value);
  };
  
  function removeToCartDb(id, cart) {
    dispatch(removeFromCart(currentUser._id, { id, cart }));
  };

  function removeToCartStorage(cart, id) {
    return cart.filter(item => item._id !== id);
  };

  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      align="center"
    >

      <CartProductMeta
        origin={departure.nameCity}
        destination={arrival.nameCity}
        image={arrival.image}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >

        <QuantitySelect
          id={_id}
          value={qtySelect}
          name={arrival.nameCity}
          onChange={(e) => {onChangeQuantity(e); calculateTotal(cartDb)}}
        />

        <PriceTag price={new Intl.NumberFormat().format(price * qtySelect)} />

        { currentUser?.email ?
          <CloseButton onClick={() => {removeToCartDb(_id, cartDb)}} />
        :
          <CloseButton onClick={() => {
            cartStorage = removeToCartStorage(cartStorage, _id);
            if(cartStorage.length === 0) {
              window.localStorage.setItem("Cart", JSON.stringify([]));
            }else {
              window.localStorage.setItem("Cart", JSON.stringify(cartStorage));
            };
          }} />
        }

      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: 'flex',
          md: 'none',
        }}
      >

        <QuantitySelect
          id={_id}
          value={qtySelect}
          name={arrival.nameCity}
          onChange={onChangeQuantity}
        />

        <PriceTag price={new Intl.NumberFormat().format(price * qtySelect)} />

        { currentUser?.email ?
          <CloseButton onClick={() => {removeToCartDb()}} />
        :
          <CloseButton onClick={() => {
            cartStorage = removeToCartStorage(cartStorage, _id);
            if(cartStorage.length === 0) {
              window.localStorage.setItem("Cart", JSON.stringify([]));
            }else {
              window.localStorage.setItem("Cart", JSON.stringify(cartStorage));
            };
          }} />
        }

      </Flex>

    </Flex>
  )
};
