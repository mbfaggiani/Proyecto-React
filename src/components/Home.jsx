import { Container } from "@chakra-ui/react";
import React from "react";
import fondo from "../assets/fondo2.jpeg";

const Home = () => {
  return (
    <Container>
      <img src={fondo} alt="fondo" width="100%" />
    </Container>
  );
};

export default Home;
