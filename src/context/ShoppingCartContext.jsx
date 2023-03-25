import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  
  const [counter, setCounter] = useState(0);
  const [cuenta, setCuenta] = useState(0);
  const [cart, setCart] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [idOrden, setIdOrden] = useState("");
  const sumaTotal = () => {
    return cart.reduce((total, vln) => (total += vln.cantidad * vln.price), 0);
  };

  return (
    <CartContext.Provider
      value={{
        counter,
        setCounter,
        cart,
        setCart,
        cartItems,
        setCartItems,
        idOrden,
        setIdOrden,
        sumaTotal,
        cuenta,
        setCuenta,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;