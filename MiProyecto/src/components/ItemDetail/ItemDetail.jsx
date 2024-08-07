import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

export const ItemDetail = ({ title, imageUrl, price, description }) => {
  const [isCant, setIsCant] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (cantidad) => {
    addToCart({ title, imageUrl, price, description, cantidad });
    setIsCant(true);
  };

  return (
    <>
      <div className="item-detail-container">
        <div className="item-image">
          <img src={imageUrl} alt={title} style={{ maxWidth: "100%" }} />
        </div>
        <div className="item-info">
          <h2>{title}</h2>
          <p className="price">Precio: ${price}</p>
          <p>{description}</p>
        </div>
      </div>
      {!isCant ? (
        <ItemCount onAdd={onAdd} />
      ) : (
        <>
          <Link to={"/cart"} className="btn btn-outline-danger">
            Terminar compra
          </Link>
          <Link to={"/"} className="btn btn-outline-success">
            Seguir la compra
          </Link>
        </>
      )}
    </>
  );
};
