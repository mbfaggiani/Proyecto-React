import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react'
import { useContext } from 'react'
import {CartContext} from "../context/CartContext"


const Cart = () => {
  return (
    <div>
      <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
    </div>
  )
}



export default Cart