import { Container, Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import fondo from "../assets/fondo3.jpeg";
import { SimpleGrid } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box px={["4", "4", "6"]} py={["4", "4", "6"]} textAlign="center">
      <Box className="container-frontPage">
        <SimpleGrid columns={2} spacing={10}>
          <Box className="container-frontText">
            <Text>
              Sabes qué significa TRAPEM?...Unión. Es la unión de dos hermanos
              que con pasión, creatividad, conocimiento y amor por lo que
              hacen se animan a soñar juntos.
            </Text>
          </Box>
          <Image className="home-img" src={fondo} alt="fondo" />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Home;
