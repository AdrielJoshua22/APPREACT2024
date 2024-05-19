import React from 'react';
import './ItemDetail.css';
export const ItemDetail = ({ title, imageUrl, price, description }) => {
  return (
    <div className="item-detail">
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
      <p className="price">Precio: ${price}</p>
      <p>{description}</p>
    </div>
  );
};
