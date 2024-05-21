import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mFetch } from '../../utils/mFetch';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {
  const { pid } = useParams();
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    mFetch().then((productos) => {
      const prod = productos.find((p) => p.id === pid);
      setProducto(prod);
      setLoading(false);
    });
  }, [pid]);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemDetail
          title={producto.name}
          imageUrl={producto.foto}
          price={producto.price}
          description={`Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza.`}
          
        />
      )}
    </div>
  );
};
