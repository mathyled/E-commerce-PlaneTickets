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
import React, { useState } from 'react'
import { Card } from '../components/Card'
import { Layout } from '../components/Layout'
import { useHistory, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../../context/AuthContext'

function useQuery(){
  const location = useLocation()
  return new URLSearchParams(location.search)
};

export  function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState()
 const {resetPassword} = useAuth()
 const query = useQuery()
 const toast =  useToast()
 const navigate = useNavigate()
 console.log(query.get("mode"))
 console.log(query.get("oobCode"))
 console.log(query.get("continueUrl"))
  return (
    <Layout>
      <Heading textAlign='center' my={12}>
        Reset password
      </Heading>
      <Card maxW='md' mx='auto' mt={4}>
        <chakra.form
          onSubmit={async e => {
            e.preventDefault()
            try {
              await resetPassword(query.get('oobCode'), newPassword)
              toast({
                description: 'Password has been changed, you can login now.',
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
              navigate('/')
            } catch (error) {
              toast({
                description: error.message,
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
              console.log(error.message)
            }
          }}
        >
          <Stack spacing='6'>
            <FormControl id='password'>
              <FormLabel>New password</FormLabel>
              <Input type='password' autoComplete='password' required onChange={e=> setNewPassword(e.target.value)} />
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
