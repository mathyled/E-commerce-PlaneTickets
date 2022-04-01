import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import NavBar  from '../../NavBar/NavBar'


export function Layout({ children }) {
  return (
    <Box mb={16}>
      <NavBar />
      <Container maxW='container.lg'>{children}</Container>
    </Box>
  )
}
