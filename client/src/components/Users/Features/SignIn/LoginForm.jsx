import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,

} from '@chakra-ui/react'
import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link} from 'react-router-dom'
// import { Card } from '../components/Card'
import DividerWithText from '../UserModal/components/DividerWithText'


export  function LoginForm() {


  return (

    <>
      <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            // your login logic here
          }}
        >
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input name='email' type='email' autoComplete='email' required />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                name='password'
                type='password'
                autoComplete='password'
                required
              />
            </FormControl>
            {/* <PasswordField /> */}
            <Button type='submit' colorScheme='primary' size='lg' fontSize='md'>
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
          onClick={() => alert('sign in with google')}
        >
          Sign in with Google
        </Button>
    </>
  )
}
