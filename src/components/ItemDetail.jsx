
import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({helados}) => {
  const {id} = useParams ();

  const filter = helados.filter((helado) => helado.id ==id)
  return (
    <>
    {filter.map((helado) => (
    <div key={helado.id}>
    <Center>
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={helado.image}
      alt='Sabores'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{helado.name}</Heading>
      <Text> {helado.descrption}</Text>
      <Text color='yellow.600' fontSize='2xl'> Precio: ${helado.price}</Text>
      <Text> Categoria: {helado.category}</Text>
      <Text> Stock: {helado.stock}</Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ItemCount/>
      <Button variant='solid' colorScheme='green'>
        Comprar
      </Button>
  </CardFooter>
</Card>
</Center>
</div>
    ))}
    </>
  );
};

export default ItemDetail