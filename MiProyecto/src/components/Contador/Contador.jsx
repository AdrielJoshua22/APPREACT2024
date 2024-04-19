import React from 'react'
import { useState } from 'react'

export const Contador = ({value}) => {
    const [contador,setContador]= useState(value)

    const handleClick = ()=>{
        setContador(contador +1)

    }
   return (
    <div>
      <h1>Apreta el botton</h1>
      <p>{contador}</p>
      <button onClick={handleClick}>
        botton
      </button>
    </div>
  )
}





