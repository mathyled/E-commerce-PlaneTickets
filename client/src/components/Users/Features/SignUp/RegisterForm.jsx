import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,

} from '@chakra-ui/react'
import React, { useState } from 'react'
// import { useAuth } from '../../../../context/AuthContext';
// import useMounted from "../../../../hooks/useMounted";
import {useDispatch} from "react-redux";
import {signUp} from "../../../../redux/actions/actions"
export function RegisterForm() {
  const [inputs, setInputs] = useState({
    username:"",
    email: "",
    password: "",
  });
  // const [submit, setSubmit] = useState(false)
  // const toast = useToast()
  // const { register } = useAuth()
  // const mounted = useMounted()
  const dispatch = useDispatch()
console.log("register",inputs)

  function handlerOnChange(e) {
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <>
      <chakra.form
        onSubmit={( e )=> {
          e.preventDefault()
          dispatch(signUp(inputs))
        }}
      >
        <Stack spacing='6'>

        <FormControl >
            <FormLabel>Username</FormLabel>
            <Input
              name='usermane'
              id="username"
              required
              onChange={handlerOnChange}
            />
          </FormControl>

          <FormControl >
            <FormLabel>Email address</FormLabel>
            <Input
              name='email'
              type='email'
              id="email"
              required
              onChange={handlerOnChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name='password'
              type='password'
              id="password"
              required
              onChange={handlerOnChange}
            />
          </FormControl>


          <Button  type='submit' colorScheme='primary' size='lg' fontSize='md'>
            Sign up
          </Button>
        </Stack>
      </chakra.form>


    </>


  )
}
