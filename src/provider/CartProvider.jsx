import React, { createContext, useContext, useEffect, useState } from "react";

const cartContext =createContext(undefined)

export const CartProvider = ({children}) =>{

    const [cartProducts, setCartProducts] = useState(() => {
        const storedCart = localStorage.getItem("cartProducts");
        return storedCart ? JSON.parse(storedCart) : [];
      });

      useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
      }, [cartProducts]);

    return (
        <cartContext.Provider value={{ cartProducts,setCartProducts }}>
          {children}
        </cartContext.Provider>
    );
}

export const useCartContext = () => {
    const context = useContext(cartContext);
    return context;
};