import {
  Box,
  Input,
  Button,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre === "" || email === "" || telefono === "") {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "No pueden haber campos vacios!",
      });
    } else {
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id)) &
        Swal.fire(
          "Gracias por realizar tu pedido!",
          "A continuacion te dejamos tu numero de orden",
          "success"
        );
    }
  };

  const db = getFirestore();
  const ordersCollection = collection(db, "orden");

  const order = {
    nombre,
    email,
    telefono,
  };

  return (
    <>
      <Container
        maxW="container.sm"
        my="60px"
        centerContent
        border="1px"
        borderColor="gray.200"
        rounded="md"
        boxShadow="2xl"
      >
        <Box my="10px">
          <Text fontSize="xl">
            Completar el formulario para enviar el pedido
          </Text>
        </Box>

        <FormControl borderWidth="1px" p="15px">
          <FormLabel size="sm">Nombre</FormLabel>
          <Input
            placeholder="Nombre y Apellido"
            size="md"
            bg="whait"
            type="text"
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          <FormLabel>Telefono</FormLabel>
          <Input
            placeholder="Telefono"
            size="md"
            bg="whait"
            type="text"
            onChange={(e) => {
              setTelefono(e.target.value);
            }}
          />
          <FormLabel>E-mail</FormLabel>
          <Input
            placeholder="E-mail"
            size="md"
            bg="whait"
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </FormControl>
        <Button
          m={4}
          type="submit"
          onClick={handleSubmit}
          variant="solid"
          colorScheme="green"
          size="md"
          width="100%"
          height="35px"
        >
          Enviar y confirmar pedido
        </Button>
        <Flex justify="center" direction="column" alignItems="center" m="5">
          <Text fontSize="large" m="3">
            Número de órden: {orderId}
          </Text>
          <br />
          <br />
          <Link to={`/`}>
            <Button as={Button} colorScheme="green" size="md" mx="2">
              Volver al inicio
            </Button>
          </Link>
        </Flex>
      </Container>
    </>
  );
};

export default Checkout;
