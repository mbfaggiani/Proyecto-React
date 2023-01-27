import CartWidget from "./CartWidget";
import { Container, Flex, Spacer, Box, Heading } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <Container maxW="100rem" bg="white">
        <Flex alignItems="center" gap="2">
          <Box p="2" color="red.100">
            <Heading size="md">
              <img src="./images/IMG_0473.PNG" alt="" width="150rem" />
            </Heading>
          </Box>
          <Spacer />
          <Box p="6" color="red.100">
            <CartWidget />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
