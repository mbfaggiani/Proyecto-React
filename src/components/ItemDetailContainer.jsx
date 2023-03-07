import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState ([]);
  useEffect(() => {
    const db = getFirestore();
    const heladosCollection = collection(db, "helados");
    getDocs(heladosCollection).then((querySnapshot) => {
      const helados = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(helados);
    });
  }, []);


return (
  <>
  <ItemDetail helados={data}/>
  </>
);
};

export default ItemDetailContainer;