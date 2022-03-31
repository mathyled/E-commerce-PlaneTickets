import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useToast,

} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
// import { Card } from '../components/Card'
import DividerWithText from '../UserModal/components/DividerWithText'
import { useAuth } from '../../../../context/AuthContext';
import useMounted from "../../../../hooks/useMounted";

export function LoginForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [submit, setSubmit] = useState(false)
  const toast = useToast()
  const { login,signInWithGoogle } = useAuth()
  const navigate = useNavigate()
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
          // login logic 
          if (!inputs.email || !inputs.password) {
            toast({
              description: 'Credentials not valid.',
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
          }
          setSubmit(true)
          login(inputs.email, inputs.password)
            .then(res =>{
              console.log(res)
              navigate("/profile")
            })
            .catch(error => {
              console.log(error.message)
              toast({
                description: error.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            })
            .finally(() =>{
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
          {/* <PasswordField /> */}
          <Button isLoading={submit} type='submit' colorScheme='primary' size='lg' fontSize='md'>
            Sign in
          </Button>
        </Stack>
      </chakra.form>
      <HStack justifyContent='center' my={4}>
        <Button variant='link'>
          <Link to='/forgot-password'>Forgot password?</Link>
        </Button>

      </HStack>
      <DividerWithText my={6}>OR</DividerWithText>
      <Button
        variant='outline'
        isFullWidth
        colorScheme='red'
        leftIcon={<FaGoogle />}
        onClick={() =>signInWithGoogle().then(user => console.log(user)).cath(error=> console.log(error))}
      >
        Sign in with Google
      </Button>
    </>
  )
}
