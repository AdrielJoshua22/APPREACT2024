import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mFetch"
import './ItemListContainer.css'
import { Contador } from "../contador/contador"
import { Link } from "react-router-dom"

 export const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        mFetch()
        .then( resultado=> { 
            setProductos(resultado)
        })
        .catch( error => console.log(error) )
        .finally(()=> setIsLoading(false))
    }, [])

    console.log(productos)
    return (
        <div className="card-container">
            { isLoading ?
                <h2>Cargando...</h2>
                : 
                productos.map( ({id, foto, name, price, categoria}) =>  
                    <div key={id} className="card">
                        <Link to={`/detail/${id}`}>
                        <img src={foto} className="card-img-top" alt="imagen-card" />
                        <div className="card-body">
                            <h6 className="nombre">Nombre: {name}</h6>
                            <label className="precio">Precio: {price}</label>
                            <label className="categoria">Categoria: {categoria}</label>
                        </div>
                        <div className="card-footer">
                            <button className="detalle">Detalle</button>
                            <Contador/>
                        </div>
                        </Link>
                    </div>
                ) 
            }
        </div>
    )
}