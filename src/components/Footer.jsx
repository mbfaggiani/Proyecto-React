import React from "react";
import {
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Stack
        alignItems="center"
        bgColor="green.100"
        color="green.800"
        spacing="5px"
      >
        <Heading size="sm">HORARIOS</Heading>
        <Text size="xs">
          Dom a Jue de 12 a 00 hs. - Vie y Sab de 12 a 00.30 hs.
        </Text>
        <Heading size="sm">TELEFONO</Heading>
        <Text size="xs">1125986271</Text>
        <Heading size="sm">DIRECCION</Heading>
        <Text size="xs">Andres Baranda 1898</Text>
      </Stack>
    </>
  );
};

export default Footer;
