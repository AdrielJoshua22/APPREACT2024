import React from 'react';
import './ItemDetail.css';
import {Contador} from '../Contador/Contador'
import {useState} from 'react';


export const ItemDetail = ({ title, imageUrl, price, description }) => {
  const [isCant, setIsCant] = useState(false)

/*    const onAdd= (cantidad)=>{
    console.log('cantidad seleccionada :',cantidad)
    setIsCant(true)
  }  */

  return (
   /*  !isCant ?
    <Contador onAdd={onAdd}/>
    : */
    <div className="item-detail-container">
      <div className="item-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="item-info">
        <h2>{title}</h2>
        <p className="price">Precio: ${price}</p>
        <p>{description}</p>
       <Contador/> 
      </div>
    </div>
  );
};
