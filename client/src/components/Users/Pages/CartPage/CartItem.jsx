import { CloseButton, Flex, Link, Select, useColorModeValue } from '@chakra-ui/react'

import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { useEffect, useState } from 'react'
import { calculateTotal, removeFromCart } from "../../../../redux/actions/actions"
import { useDispatch, useSelector } from 'react-redux'
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
}

export const CartItem = (props) => {
  // const cart = useSelector(state=> state.cart)
  const dispatch = useDispatch()
  let {
    _id,
    total,
    arrival,
    departure,
    quantity
  } = props
  let [qtySelect, setQtySelect] = useState(quantity)

  // qtySelect = quantity;
  // useEffect(() => {
  //   setQtySelect(quantity);
  // }, [dispatch, quantity]);
  
  function onChangeQuantity(e) {
    setQtySelect(e.target.value);
  }

  function onClickDelete(e) {
    // e.target.value = qtySelect;
    // setQtySelect(qtySelect);
    dispatch(removeFromCart(_id))
    dispatch(calculateTotal())
  }

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

        <PriceTag price={new Intl.NumberFormat().format(total * qtySelect)} />

        <CloseButton onClick={onClickDelete} />

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

        <PriceTag price={new Intl.NumberFormat().format(total * qtySelect)} />

        <CloseButton onClick={onClickDelete} />

      </Flex>

    </Flex>
  )
}
