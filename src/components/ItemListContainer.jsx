import React from "react";
import { Container, Flex, Spacer, Box, Heading } from "@chakra-ui/react";

const ItemListContainer = () => {
  return (
    <>
      <Container maxW="100rem" bg="pink">
        <Flex alignItems="center" gap="2">
          <Box p="2" color="black">
            <div>Productos</div>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default ItemListContainer;
