import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a nuestra tienda online" />
    </>
  );
}

export default App;
