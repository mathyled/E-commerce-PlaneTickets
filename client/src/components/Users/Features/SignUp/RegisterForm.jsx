import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,

} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
// import useMounted from "../../../../hooks/useMounted";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import {logOut, signUp} from "../../../../redux/actions/actions"
export function RegisterForm() {

  const [inputs, setInputs] = useState({
    username:"",
    email: "",
    password: "",
  });

  const dispatch = useDispatch()
 const currentUser = useSelector(state=> state.user)
 const toast = useToast()

//  console.log("currentUser",currentUser?.message)
 useEffect(()=>{
   if(currentUser?.message){
    toast({
      description: currentUser?.message,
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
    //  alert(currentUser.message)

     dispatch(logOut() )
   }
 },[currentUser])

  function handlerOnChange(e) {
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value,
    })

  };

  function handlerSubmit(e) {
      e.preventDefault()
      dispatch(signUp(inputs))
   
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


          <Button 
           type='submit' colorScheme='primary' size='lg' fontSize='md'>
            Sign up
          </Button>
        </Stack>
      </chakra.form>


    </>


  )
}
