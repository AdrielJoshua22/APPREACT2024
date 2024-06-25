import React from 'react'
import { useCartContext } from '../../context/CartContext'

export const CartContainer = () => {
  const {cartList,vaciarCarrito }= useCartContext()
  return (
    <>
      {cartList.map(prod=>{
        <img src={prod.foto} alt='imagen'/>
       
      })}
    </>
  )
}


