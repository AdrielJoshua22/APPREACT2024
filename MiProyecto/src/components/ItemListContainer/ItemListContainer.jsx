import { useEffect, useState } from "react";
import { mFetch } from "../../utils/mFetch";
import './ItemListContainer.css';
import { Link } from "react-router-dom";
import Spinner from '../Spinner/Spinner';

export const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        mFetch()
            .then(productos => {
                setTimeout(() => {
                    setProductos(productos);
                    setLoading(false);
                }, 1000);
            });
    }, []);

    console.log(productos);
    return (
        <div className="card-container">
            {loading ? <Spinner /> :
                productos.map(({ id, foto, name, price, categoria }) =>
                    <div key={id} className="card">
                        <img src={foto} className="card-img-top" alt="imagen-card" />
                        <div className="card-body">
                            <h6 className="nombre">Nombre: {name}</h6>
                            <label className="precio">Precio: {price}</label>
                            <label className="categoria">Categoria: {categoria}</label>
                        </div>
                        <div className="card-footer">
                            <Link to={`/detail/${id}`}>
                                <button className="detalle">Detalle</button>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
