import React from 'react'
import { Container } from '@chakra-ui/react'


export function Layout(props) {
  return (
    <>

      <Container maxW='container.lg'>{props.children}</Container>
    </>
  )
}
