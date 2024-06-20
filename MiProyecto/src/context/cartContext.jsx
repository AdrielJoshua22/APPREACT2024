import { createContext, useContext, useState } from "react"
// crear un contexto inicializado con []
// exportar app


export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children})=> {

    const [cartList, setCartList] = useState([])

    const addToCart = (newProduct)=>{
        setCartList([
            ...cartList,
            newProduct
        ])
    }

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