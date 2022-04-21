import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { Layout } from '../components/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import { resetPassword } from '../../../../../redux/actions/actions'
import { useDispatch, useSelector } from 'react-redux'




export function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState({password:"" })
  const {token} = useParams()
  const dispatch = useDispatch()
console.log(token)
  const navigate = useNavigate()

  
  const forgot = useSelector(state=> state.forgot)

  useEffect(()=>{
    if(forgot.message){
  
      alert(forgot.message)
      navigate("/home")
    }
  },[forgot])
  
function handlerSubmit(e) {
  e.preventDefault()
  dispatch(resetPassword(token,newPassword))
}
  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        Reset password
      </Heading>
      <Card maxW='md' mx='auto' mt={4}>
        <chakra.form
          onSubmit={handlerSubmit}
        >
          <Stack spacing='6'>
            <FormControl>
              <FormLabel>New password</FormLabel>
              <Input type='password'  id='password' name="password" required
                onChange={e => setNewPassword({
                  ...newPassword,
                  [e.target.name]: e.target.value,
                })
                } />
            </FormControl>
            <Button type='submit' colorScheme='primary' size='lg' fontSize='md'>
              Reset password
            </Button>
          </Stack>
        </chakra.form>
      </Card>
    </Layout>
  )
}
