import React from 'react';
import './ItemDetail.css';
import {Contador} from '../contador/contador'

export const ItemDetail = ({ title, imageUrl, price, description }) => {
  return (
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
