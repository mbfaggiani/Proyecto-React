import Item from './Item'
import { Container } from '@chakra-ui/react';

const ItemList = ({helados}) => {
  return (
    <>
    <Container>
    {helados.map((helados) => (
        <Item
        key={helados.id}
        id={helados.id}
        name={helados.nombre}
        description={helados.descripcion}
        price={helados.precio}
        category={helados.categoria}
        stock={helados.stock}
        image={helados.image}/>
    ))}
    </Container>
    </>
  );
};

export default ItemList;


