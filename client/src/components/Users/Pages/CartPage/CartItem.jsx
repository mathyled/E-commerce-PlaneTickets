import { CloseButton, Flex, Select, useColorModeValue } from '@chakra-ui/react'

import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { useEffect, useState } from 'react'
// import { calculateTotal, removeFromCart } from "../../../../redux/actions/actions"
import { useDispatch } from 'react-redux'

const QuantitySelect = (props) => {
  // console.log("CartItem", props);
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

// let cart = JSON.parse(localStorage.getItem("Cart"));

export const CartItem = (props) => {
  const dispatch = useDispatch();
  const {
    _id,
    price,
    arrival,
    departure,
    quantity
  } = props;
  let [qtySelect, setQtySelect] = useState(quantity);
  let [ cart ] = useState(JSON.parse(localStorage.getItem("Cart")));

  useEffect(() => {
    setQtySelect(quantity);
  }, [dispatch, quantity]);

  function onChangeQuantity(e) {
    setQtySelect(e.target.value);
  };

  function removeToCart(cart, id) {
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
          onChange={onChangeQuantity}
        />

        <PriceTag price={new Intl.NumberFormat().format(price * qtySelect)} />

        <CloseButton onClick={() => {
          cart = removeToCart(cart, _id);
          if(cart.length === 0) {
            window.localStorage.setItem("Cart", JSON.stringify([]));
          }else {
            window.localStorage.setItem("Cart", JSON.stringify(cart));
          };
        }} />

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

        <CloseButton onClick={() => {
          cart = removeToCart(cart, _id);
          if(cart.length === 0) {
            window.localStorage.setItem("Cart", JSON.stringify([]));
          }else {
            window.localStorage.setItem("Cart", JSON.stringify(cart));
          };
        }} />

      </Flex>

    </Flex>
  )
};
