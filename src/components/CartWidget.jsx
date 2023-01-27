import React from "react";
import { Container, Flex, Box } from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <>
      <Container maxW="100rem" bg="white">
        <Flex alignItems="center" gap="2">
          <Box p="2" color="red.200">
            <div>
              <span className="material-symbols-outlined">shopping_cart</span>
            </div>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default CartWidget;
