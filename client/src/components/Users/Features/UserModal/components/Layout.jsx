import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import WithSubnavigation from '../../NavBar'


export function Layout({ children }) {
  return (
    <Box mb={16}>
     <WithSubnavigation/>
      <Container maxW='container.lg'>{children}</Container>
    </Box>
  )
}
