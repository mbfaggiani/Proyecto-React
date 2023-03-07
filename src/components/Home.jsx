import { Container } from '@chakra-ui/react'
import React from 'react'
import fondo from "/images/papel.jpg";

const Home = () => {
  return (
    <Container >
    <img src={fondo} alt="fondo" width="100%"/>
    </Container>
  )
}

export default Home