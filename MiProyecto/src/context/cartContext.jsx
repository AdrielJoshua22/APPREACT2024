import { createContext, useContext, useState } from "react"


export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children})=> {

  const [cartList, setCartList]=useState([])

  const addToCart = (newProduct) => {
    const existingProductIndex = cartList.findIndex(item => item.title === newProduct.title);
    if (existingProductIndex !== -1) {
      // El producto ya existe en el carrito, actualiza la cantidad
      const updatedCartList = cartList.map((item, index) => {
        if (index === existingProductIndex) {
          return { ...item, cantidad: item.cantidad + newProduct.cantidad };
        }
        return item;
      });
      setCartList(updatedCartList);
    } else {
      // El producto no está en el carrito, añádelo
      setCartList([
        ...cartList,
        newProduct
      ]);
    }
  };
  

    const vaciarCarrtio = () => {
        setCartList([])
    }

    return (
       <CartContext.Provider value={{
         
            cartList,
            addToCart,
            vaciarCarrtio
       }}>
            {children}
       </CartContext.Provider>
    )
}