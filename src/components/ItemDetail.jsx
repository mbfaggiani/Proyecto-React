import React, { useState, useContext } from "react";
import { Button, Center, Image } from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartContext";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Box,
  ButtonGroup,
  Flex,
} from "@chakra-ui/react";
import ItemQuantitySelector from "./ItemQuantitySelector";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ItemDetail = ({ productItem }) => {
  const { counter, setCounter, cart, setCart, cartItems } =
    useContext(CartContext);

  return (
    <>
      <Center padding="4">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          backgroundColor="orange.100"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "300px" }}
            src={productItem.image}
            alt={productItem.image}
          />
          <Stack>
            <CardBody>
              <Heading size="md">{productItem.flavor}</Heading>
              <Text py="2">
                {productItem.description}
                {productItem.stock ? (
                  <p className="mt-1 text-sm text-green-500 text-left">
                    Stock: {productItem.stock}
                  </p>
                ) : (
                  <p className="mt-1 text-sm text-red-400 text-left">
                    Sold out
                  </p>
                )}
                $ {productItem.price}
              </Text>
            </CardBody>

            <CardFooter>
              <ButtonGroup spacing="12">
                <ItemQuantitySelector stock={productItem.stock} />
                <Button
                  onClick={() => {
                    setCart(cart + counter);
                    setCounter(0);
                    if (counter != 0) {
                      cartItems.push([
                        productItem.flavor,
                        productItem.price,
                        counter,
                      ]);
                    } else {
                      Swal.fire({
                        icon: "warning",
                        title: "Oops...",
                        text: "Debe indicar la cantidad!",
                      });
                    }
                  }}
                  colorScheme="green"
                >
                  Agregar al carrito
                </Button>
              </ButtonGroup>
            </CardFooter>
            <Box padding="4">
              <Button onClick={() => setCounter(0)} colorScheme="green">
                <Link to={"/catalogue"}>Volver</Link>
              </Button>
            </Box>
          </Stack>
        </Card>
      </Center>
    </>
  );
};

export default React.memo(ItemDetail);
