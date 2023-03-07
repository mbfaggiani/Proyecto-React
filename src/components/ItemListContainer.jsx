import ItemList from "./ItemList";
import { Container, Flex, Spacer, Box, Heading, CheckboxIcon, Stack, Center} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";



const ItemListContainer = () => {
  const [helados, setHelados] = useState([]);
  const { categoria } = useParams();


  useEffect(() => {
    const db = getFirestore();
    const heladosCollection = collection(db, "helados");
    getDocs(heladosCollection).then((querySnapshot) => {
      const helados = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setHelados(helados);
    });
  }, []);

  const catFilter = helados.filter((helado) => helado.categoria === categoria);

return (
<div>
      {categoria ? <ItemList helados={catFilter} /> : <ItemList helados={helados} />}
    </div>
);
};

export default ItemListContainer;



