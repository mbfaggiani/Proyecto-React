import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import {
  Button,
  Flex,
  Spacer,
  ButtonGroup,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import Swal from 'sweetalert2'

const Cart = () => {
  let precioTotal = 0;
  const { cart, setCart, cartItems, setCartItems } = useContext(CartContext);
  cartItems.map((item) => {
    precioTotal += item[1] * item[2];
  });

  const eliminarItem = (e) => {
    setCartItems(cartItems.filter((i) => i != e));
  };

  const VerificarCart = ({ cantidadProductos }) => {
    if (cantidadProductos > 0) {
      return (
        <Link to={`/checkout`}>
          <Box padding='4'>
          <Button as={Button} colorScheme="green" size="md" mx="2">
            Realizar pedido
          </Button>
          </Box>
        </Link>
      );
    } else {
      return (
        <Box padding='4'>
        <Button
          as={Button}
          colorScheme="green"
          size="md"
          mx="2"
          onClick={() => 
            Swal.fire(
              'Espera!',
              'El carrito de compras no puede estar vacio!',
              'error'
            )  
          }
        >
          Realizar pedido
        </Button>
        </Box>
        
      );
    }
  };

  return (
    <>
      <Flex justify="center">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Producto</Th>
                <Th>Cantidad</Th>
                <Th>Importe total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cartItems.map((item) => (
                <Tr key={item[0]}>
                  <Td>{item[0]}</Td>
                  <Td>{item[2]}</Td>
                  <Td>${item[1] * item[2]}</Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      size="sm"
                      color="#f6f6f6"
                      onClick={() => {
                        eliminarItem(item);
                        setCart(cart - item[2]);
                      }}
                    >
                      <span className="material-symbols-outlined">Delete</span>
                    </Button>
                  </Td>
                </Tr>
              ))}
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td>${precioTotal}</Td>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <br />
      <br />
      <Flex w="100%" spacing={4} direction="row" align="center">
        <Spacer />
        <ButtonGroup spacing="2">
          <VerificarCart cantidadProductos={cart} />
        </ButtonGroup>
        <Spacer />
      </Flex>


    </>
  );
};

export default Cart;
