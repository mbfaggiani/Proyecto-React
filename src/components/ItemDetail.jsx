import React, { useState, useContext } from "react";
import { Button, Image } from "@chakra-ui/react";
import { CartContext } from "../context/ShoppingCartContext";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";
import ItemQuantitySelector from "./ItemQuantitySelector";
import { Link } from "react-router-dom";

const ItemDetail = ({ productItem }) => {
  const { counter, setCounter, cart, setCart, cartItems } =
    useContext(CartContext);

  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
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
                <p className="mt-1 text-sm text-red-400 text-left">Sold out</p>
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
                    alert("Debe indicar la cantidad");
                  }
                }}
                colorScheme="green"
              >
                Agregar al carrito
              </Button>
            </ButtonGroup>
          </CardFooter>
          <Button
            onClick={() => setCounter(0)}
            variant="ghost"
            colorScheme="green"
          >
            <Link to={"/catalogue"}>Volver</Link>
          </Button>
        </Stack>
      </Card>
    </>
  );
};

export default React.memo(ItemDetail);
