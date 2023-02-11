import { Container } from '@chakra-ui/react'
import React from 'react'
import crema from "/images/crema.jpeg";

const Home = () => {
  return (
    <Container >
    <img src={crema} alt="fondo helado" width="200%"/>
    </Container>
  )
}

export default Home