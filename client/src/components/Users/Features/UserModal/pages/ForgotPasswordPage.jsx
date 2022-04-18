import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Spacer,
  Input,
  Stack,
  Container,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { forgotPassword } from '../../../../../redux/actions/actions'
import { Card } from '../components/Card'
import { Layout } from '../components/Layout'
import { useDispatch, useSelector } from "react-redux";

export function ForgotPasswordPage() {
  // const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState({email:""})
  const forgot = useSelector(state=> state.forgot)
console.log(forgot.message)
useEffect(()=>{
  if(forgot.message){

    alert(forgot.message)
  }
},[forgot])

 function handlerSubmit(e) {
      e.preventDefault()
    dispatch(forgotPassword(email))
   
  }
  return (
    <Layout>
      <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>

        <Card maxW='md' mx='auto' mt={4}>

          <Heading textAlign='center' my={12}>
            Forgot password
          </Heading>
          <Card maxW='md' mx='auto' mt={4}>
            <chakra.form
              onSubmit={handlerSubmit}
            >
              <Stack spacing='6'>
                <FormControl >
                  <FormLabel>Email address</FormLabel>
                  <Input onChange={e => setEmail({ 
                    ...email,
      [e.target.name]: e.target.value,})
      } name='email' type='email' id='email'  required />
                </FormControl>
                <Spacer />
                <Button type='submit' colorScheme='primary' size='lg' fontSize='md'>
                  Submit
                </Button>
              </Stack>
            </chakra.form>

          </Card>
        </Card>
      </Container>
    </Layout>
  )
}
