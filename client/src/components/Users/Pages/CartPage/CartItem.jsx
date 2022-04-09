import { CloseButton, Flex, Link, Select, useColorModeValue } from '@chakra-ui/react'

import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { useState } from 'react'
import {addQuatity, removeFromCart} from "../../../../redux/actions/actions"
import { useDispatch, useSelector } from 'react-redux'
const QuantitySelect = (props) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
    </Select>
  )
}

export const CartItem = (props) => {
  const [qtySelect,setQtySelect] =  useState(1)
  const cart = useSelector(state=> state.cart)
  const dispatch = useDispatch()
  const {
    _id,
       price,
       arrival,
        departure
  } = props

  function onChangeQuantity(e) {
    setQtySelect(
      [e.target.name] = e.target.value
    )
    dispatch(addQuatity(price* e.target.value))
  }
  console.log("ID]",_id)

  function onClickDelete(e) {
    e.preventDefault()
    dispatch(removeFromCart(_id))
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
          value={qtySelect}
          name={arrival.nameCity}
          onChange={onChangeQuantity}
        />
    
        <PriceTag price={new Intl.NumberFormat().format(price*qtySelect)} />
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
          value={qtySelect}
          onChange={onChangeQuantity}
        />
        <PriceTag price={price} />
        <CloseButton onClick={onClickDelete} />
      </Flex>
    </Flex>
  )
}
