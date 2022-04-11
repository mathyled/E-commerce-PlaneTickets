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
import { useAuth } from '../../../../context/AuthContext';
import useMounted from "../../../../hooks/useMounted";

export function RegisterForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false)
  const toast = useToast()
  const { register } = useAuth()
  const mounted = useMounted()

  function handlerOnChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <chakra.form
        onSubmit={async e => {
          e.preventDefault()
          // register logic here
          // console.log(inputs)
          if (!inputs.email || !inputs.password) {
            toast({
              description: 'Credentials not valid.',
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
          }
          setSubmit(true)
          register(inputs.email, inputs.password)
            .then(res => console.log(res))
            .catch(error => {
              console.log(error.message)
              toast({
                description: error.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            })
            .finally(() => {
              mounted.current && setSubmit(false)
            })
        }}
      >
        <Stack spacing='6'>

          <FormControl id='email'>
            <FormLabel>Email address</FormLabel>
            <Input
              name='email'
              type='email'
              autoComplete='email'
              required
              onChange={handlerOnChange}
            />
          </FormControl>

          <FormControl id='password'>
            <FormLabel>Password</FormLabel>
            <Input
              name='password'
              type='password'
              autoComplete='password'
              required
              onChange={handlerOnChange}
            />
          </FormControl>


          <Button isLoading={submit} type='submit' colorScheme='primary' size='lg' fontSize='md'>
            Sign up
          </Button>
        </Stack>
      </chakra.form>


    </>


  )
}
