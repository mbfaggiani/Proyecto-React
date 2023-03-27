import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Stack,
  Divider,
  Button,
  Center,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, flavor, description, price, category, image }) => {
  return (
    <div>
      <div key={id}>
        <Center padding='4'>
        <Card maxW="md">
          <CardBody>
            <Image borderRadius="lg" src={image} />
            <Stack mt="6" spacing="3">
              <Heading size="md"> {flavor} </Heading>
              <Text> {description}</Text>
              <Text> Categoria: {category}</Text>
              <Text color="yellow.600" fontSize="2xl">
                {" "}
                Precio: ${price}{" "}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <Center>
          <CardFooter>
            <Button variant="solid" colorScheme="green">
              <Link to={`/item/${id}`}>Detalle</Link>
            </Button>
          </CardFooter>
          </Center>
        </Card>
        </Center>
      </div>
    </div>
  );
};

export default Item;
