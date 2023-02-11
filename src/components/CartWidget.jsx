import React from "react";
import { Container, Flex, Box } from "@chakra-ui/react";
import cart from "/images/cart.png";

const CartWidget = () => {
  return (
    <>
      <Container maxW="100rem" bg="brown.100">
        <Flex alignItems="center" gap="2">
          <Box p="2" color="red.800">
            <div>
            <img src={cart} alt="" width="40rem" />
            </div>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default CartWidget;
