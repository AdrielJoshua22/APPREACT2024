import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children})=> {

    const [cartList, setCartList] = useState([])

    const addToCart = (newProduct) => {
        const index = cartList.findIndex(item => item.id === newProduct.id);
        if (index !== -1) {
            // El producto ya existe en el carrito, actualiza la cantidad
            const updatedCartList = cartList.map((item, idx) => {
                if (idx === index) {
                    return { ...item, cantidad: item.cantidad + newProduct.cantidad };
                }
                return item;
            });
            setCartList(updatedCartList);
        } else {
            // El producto no está en el carrito, agrégalo
            setCartList([...cartList, newProduct]);
        }
    };
    
    const vaciarCarrito = () => {
        setCartList([])
    }

    return (
       <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito
       }}>
            {children}
       </CartContext.Provider>
    )
}
