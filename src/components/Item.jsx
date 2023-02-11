import React from 'react'
import ItemCount from "./ItemCount"
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Stack, Divider, Button, ButtonGroup, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({id, name, description, price, category, image}) => {
  return (
    <div>
      <div key={id}>
      <Card maxW='sm'>
  <CardBody>
    <Image borderRadius='lg' src= {image}/>
    <Stack mt='6' spacing='3'>
      <Heading size='md'> {name} </Heading>
      <Text> {description}</Text>
      <Text> Categoria: {category}</Text>
      <Text color='yellow.600' fontSize='2xl'> Precio: ${price} </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
      <Button variant='solid' colorScheme='green'>
        <Link to={`/item/${id}`}>Detalle</Link>
      </Button>
  </CardFooter>
</Card>

      </div>
    </div>
  
  );
};

export default Item;