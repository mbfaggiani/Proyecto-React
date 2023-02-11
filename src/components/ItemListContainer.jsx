import ItemList from "./ItemList";
import { Container, Flex, Spacer, Box, Heading, CheckboxIcon, Stack, Center} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Data from "../data.json"


const ItemListContainer = () => {
  const { category } = useParams();
  console.log(category);

  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (Data.lengh === 0) {
        reject (newError("No hay datos"));
      }
      setTimeout(() => {
        resolve(Data);
      }, 2000);
    });
  };
  
  async function fetchingData () {
    try {
      const datosFetched = await getDatos();
    } catch (err) {
      console.log(err)
    }
  }
  
fetchingData ();

if (category === undefined) {
  return (
    <Container>
        <Center>
          <Heading>Catalogo</Heading>
        </Center>
      <ItemList helados={Data}/>
    </Container>
  );
} else {
  const catFilter = Data.filter((helados) => helados.category === category);
  console.log(catFilter);

return (
<div>
<Container>
  <Stack>
      <Flex alignItems="center">
        <Heading>Sabores</Heading>
    </Flex>
    
  {catFilter ? (
    <ItemList helados={catFilter}/>
  ) : (
    <ItemList helados={Data}/>
  )};
  </Stack>
  </Container>
</div>
);
};
};

export default ItemListContainer;



