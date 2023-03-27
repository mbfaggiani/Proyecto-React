import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { Stack, Button } from "@chakra-ui/react";

const ItemQuantitySelector = ({ stock }) => {
  const { counter, setCounter } = useContext(CartContext);

  const suma = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const resta = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <Stack spacing={4} direction="row" align="center">
        {counter === 0 ? (
          <Button onClick={resta} colorScheme="green" size="md">
            -
          </Button>
        ) : (
          <Button onClick={resta} colorScheme="green" size="md">
            -
          </Button>
        )}
        <h2>{counter}</h2>
        {counter === stock ? (
          <Button onClick={suma} variant="ghost" colorScheme="green" size="md">
            +
          </Button>
        ) : (
          <Button onClick={suma} colorScheme="green" size="md">
            +
          </Button>
        )}
      </Stack>
    </>
  );
};

export default ItemQuantitySelector;
