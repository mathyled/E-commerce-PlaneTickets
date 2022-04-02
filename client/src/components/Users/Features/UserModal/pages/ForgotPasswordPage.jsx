import {
  Button,
  // Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Spacer,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react'
import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom'
import { Card } from '../components/Card'
// import DividerWithText from '../components/DividerWithText'
import { Layout } from '../components/Layout'
import {useAuth} from "../../../../../context/AuthContext"

export function ForgotPasswordPage() {
  // const navigate = useNavigate()
const [email,setEmail] = useState("")
const {forgotPassword} = useAuth()
const toast = useToast()
  return (
    <Layout>
       <Card maxW='md' mx='auto' mt={4}>

      <Heading textAlign='center' my={12}>
        Forgot password
      </Heading>
      <Card maxW='md' mx='auto' mt={4}>
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            forgotPassword(email)
            .then(res=>{
              console.log(res)
              toast({
                description: 'Email Send, check your email!',
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
            })
            .catch(e=>{ 
              console.log(e.message)
              toast({
                description: e.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
              })
            })
          }}
        >
          <Stack spacing='6'>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input onChange={e=> setEmail(e.target.value)} name='email' type='email' autoComplete='email' required />
            </FormControl>
            <Spacer />
            <Button type='submit' colorScheme='primary' size='lg' fontSize='md'>
              Submit
            </Button>
          </Stack>
        </chakra.form>
        {/* <DividerWithText my={6}>OR</DividerWithText> */}
        {/* <Center> */}
        {/* <Button variant='link' onClick={() => navigate('/login')}>
            Login
          </Button> */}
        {/* </Center> */}
      </Card>
       </Card>
    </Layout>
  )
}
