import {  useState } from "react"

import { useCartContext } from "../../context/cartContext"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

export const ItemDetail = ({producto}) => {
    const [isCant, setIsCant] = useState(false)

    const {addToCart} = useCartContext()

    const onAdd = (cantidad)=>{
        addToCart( { ...producto, cantidad } )
        setIsCant(true)
    }

   

    return (
        <>
            <div className="row">
                <div className="col">
                    <img src={producto.foto} className="w-50" alt="imagen" />
                    <h3>Nombre: {producto.name}</h3>
                    <h3>Categoría: {producto.categoria}</h3>
                    <h3>Precio: {producto.precio}</h3>
                    <h3>Stock: {producto.stock}</h3>
                </div>
                <div className="col">
                    {
                        !isCant ? 
                            <ItemCount onAdd={onAdd}/>
                        :
                            <>
                                <Link to={'/cart'} className="btn btn-outline-danger">Terminar compra</Link>
                                <Link to={'/'} className="btn btn-outline-success">Seguir la compra</Link>
                            </>
                    }

                </div>

            </div>

        </>
    )
}
