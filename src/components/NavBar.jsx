import CartWidget from "./CartWidget";
import { Container, Flex, Spacer, Box, Heading } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { Button } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Container maxW="100rem" bg="green.100">
        <Flex alignItems="center" gap="2">
          <Box p="2" color="red.100">
            <Heading size="md">
              <Link to={"/"}>
                <img src={logo} alt="" width="150rem" />
              </Link>
            </Heading>
          </Box>
          <Spacer />
          <Box>
            <Link to={"/catalogue"}>
              <Button colorScheme="green">Catalogo</Button>
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Flex align="center" justify="center">
              <Menu>
                <MenuButton my={6} mx={6} as={Button} colorScheme="green">
                  Sabores
                </MenuButton>
                <MenuList>
                  <MenuGroup title="Helados">
                    <NavLink to={`/category/${"Chocolates"}`}>
                      <MenuItem>Chocolates</MenuItem>
                    </NavLink>
                    <NavLink to={`/category/${"Cremas"}`}>
                      <MenuItem>Cremas</MenuItem>
                    </NavLink>
                    <NavLink to={`/category/${"Dulces de leche"}`}>
                      <MenuItem>Dulces de leche</MenuItem>
                    </NavLink>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Flex>
          </Box>
          <Spacer />
          <Box p="6" color="red.100">
            <NavLink to={"/cart"}>
              <CartWidget />
            </NavLink>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
