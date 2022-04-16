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
import React, { useEffect, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import DividerWithText from '../UserModal/components/DividerWithText'
import { useAuth } from '../../../../context/AuthContext';
import{useDispatch, useSelector} from "react-redux";
import { signIn } from '../../../../redux/actions/actions';
// import useMounted from "../../../../hooks/useMounted";

export function LoginForm() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  // const [submit, setSubmit] = useState(false)
  // const toast = useToast()
  const { login,signInWithGoogle } = useAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const currentUser = useSelector(state=> state.user)
  // const mounted = useMounted()

  useEffect(()=>{
    if(currentUser.accessToken || currentUser?.message  )
   alert(currentUser.message)
    navigate("/home")
  },[currentUser])

  function handlerOnChange(e) {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(inputs)

 async function hanldlerSignIn(){
   try{
     const user = await signInWithGoogle()
        console.log(user)
   }catch(error) {
     console.log(error)
   }
  };

  function handlerSubmit(e) {
    e.preventDefault()
   dispatch(signIn(inputs))
  }
  return (

    <>
      <chakra.form
        onSubmit={handlerSubmit}
      >
        <Stack spacing='6'>
          <FormControl >
            <FormLabel>Username</FormLabel>

            <Input
              name='username'
              id='username'
              required
              onChange={handlerOnChange}
            />
          </FormControl>
          <FormControl>

            <FormLabel>Password</FormLabel>
            <Input
              name='password'
              type='password'
              id='password'
              required
              onChange={handlerOnChange}
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
        onClick={hanldlerSignIn}
      >
        Sign in with Google
      </Button>
    </>
  )
}
