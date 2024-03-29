import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Box, Center, Spinner } from "@chakra-ui/react";
import ItemDetail from "./ItemDetail";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ItemDetailContainer() {
  const [productItem, setProductItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  const getItem = () => {
    const db = getFirestore();

    setIsLoading(true);
    const oneItem = doc(db, "helados", `${id}`);
    getDoc(oneItem)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const docs = snapshot.data();
          setProductItem(docs);
        }
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <Box>
      {isLoading ? (
        <Center>
        <Box className="container-spinner">
          <Spinner className="spinner" />
        </Box>
        </Center>
      ) : (
        <ItemDetail productItem={productItem} />
      )}
    </Box>
  );
}
