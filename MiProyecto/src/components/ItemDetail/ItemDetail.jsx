import React from 'react';


const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <ul>
        <li>Precio: {item.price}</li>
        <li>Categoría: {item.category}</li>
        {}
      </ul>
    </div>
  );
};

export default ItemDetail;
