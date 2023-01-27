import CartWidget from "./CartWidget";
import { Container, Flex, Spacer, Box, Heading } from "@chakra-ui/react";
import logo from "/images/logo.png";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <Container maxW="100rem" bg="white">
        <Flex alignItems="center" gap="2">
          <Box p="2" color="red.100">
            <Heading size="md">
              <img src={logo} alt="" width="150rem" />
            </Heading>
          </Box>
          <Spacer />
          <Box p="6" color="red.100">
            <CartWidget />
          </Box>
        </Flex>
      </Container>
      <div>
        <Menu>
          <MenuButton my={6} mx={6} as={Button} colorScheme="pink">
            Productos
          </MenuButton>
          <MenuList>
            <MenuGroup title="Helados">
              <MenuItem>Kilo de helado</MenuItem>
              <MenuItem>1/2 kilo de helado </MenuItem>
              <MenuItem>1/4 kilo de helado </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Extras">
              <MenuItem>Cucuruchos</MenuItem>
              <MenuItem>Vacitos</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </div>
    </>
  );
};

export default NavBar;
