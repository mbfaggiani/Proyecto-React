import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Box, Text, Spinner, Stack } from "@chakra-ui/react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [productsList, setProductsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  const getItems = () => {
    const db = getFirestore();

    setIsLoading(true);
    const itemsCollection = collection(db, "helados");
    getDocs(itemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data());
        setProductsList(docs);
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getItems();
  }, []);

  if (id === undefined) {
    return (
      <Box px={["4", "4", "6"]} py={["4", "4", "6"]} textAlign="center">
        <Box className="container-frontPage">
          <Box className="container-frontText">
            <Stack spacing={3}>
              <Text fontSize="2xl" color="green" as="b">
                Sabores creados ConCiencia
              </Text>
              <Text fontSize="md">
                {" "}
                Variedades de helado vegano artesanal, sin ingredientes de
                origen animal, a base de ingredientes naturales, de elaboración
                propia y de gran sabor y calidad.
              </Text>
            </Stack>
          </Box>
        </Box>
        {isLoading ? (
          <Box className="container-spinner" padding='4'>
            <Spinner className="spinner-home" />
          </Box>
        ) : (
          <ItemList products={productsList} />
        )}
      </Box>
    );
  } else {
    const categoriesFilter = productsList.filter(
      (product) => product.category === category
    );

    return (
      <Box px={["4", "4", "6"]} textAlign="center">
        {categoriesFilter ? (
          <ItemList products={categoriesFilter} />
        ) : (
          <ItemList products={productsList} />
        )}
      </Box>
      
    );
  }
};

export default ItemListContainer;
