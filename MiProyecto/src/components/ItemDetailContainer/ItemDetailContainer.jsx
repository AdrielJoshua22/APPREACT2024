import React from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

  const { pid } = useParams()
  console.log(pid)

  return (
    <div>
      <h2>componente funcionando!
        esto es ItemDetailContainer
      </h2>
      <ItemDetail/>
    </div>
  )
}
