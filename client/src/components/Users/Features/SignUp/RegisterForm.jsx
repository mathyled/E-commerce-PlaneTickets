import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,

} from '@chakra-ui/react'
import React,{useState} from 'react'
import { FaGoogle } from 'react-icons/fa'
// import { Card } from '../components/Card'
import DividerWithText from '../UserModal/components/DividerWithText'
// import { Layout } from '../components/Layout'

export  function RegisterForm() {
  const [inputs, setInputs] = useState({
    password: "",
    email: "",
  });

  function handlerOnChange(e){
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  return (
    // <Layout>
    <>

      {/* <Card maxW='md' mx='auto' mt={4}> */}
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            // your register logic here
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
     
            <Button type='submit' colorScheme='primary' size='lg' fontSize='md'>
              Sign up
            </Button>
          </Stack>
        </chakra.form>
        <Center my={4}>
 
        </Center>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant='outline'
          isFullWidth
          colorScheme='red'
          leftIcon={<FaGoogle />}
          onClick={() => alert('sign in with google')}
        >
          Sign in with Google
        </Button>
      {/* </Card> */}
    </>
     
    // </Layout>
  )
}
