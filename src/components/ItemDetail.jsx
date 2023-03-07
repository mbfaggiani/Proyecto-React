
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
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";



const ItemDetail = ({helados}) => {
  const {id} = useParams ();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const heladosRef = doc(db, "helados", `${id}`);

    getDoc(heladosRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("No such document!");
      }
    });
  }, []);

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
      <Heading size='md'>{helado.sabor}</Heading>
      <Text> {helado.descripcion}</Text>
      <Text color='yellow.600' fontSize='2xl'> Precio: ${helado.precio}</Text>
      <Text> Categoria: {helado.categoria}</Text>
      <Text> Stock: {helado.stock}</Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ItemCount/>
  </CardFooter>
</Card>
</Center>
</div>
    ))}
    </>
  );
};

export default ItemDetail