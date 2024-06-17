import {  useState } from "react"
import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"


export const ItemDetail = ({productos}) => {
    const [isCant, setIsCant] = useState(false)

    const {addToCart} = useCartContext()

    const onAdd = (cantidad)=>{
        addToCart( { ...productos, cantidad } )
        setIsCant(true)
    }

   

    return (
        <>
            <div className="row">
                <div className="col">
                    <img src={productos.foto} className="w-50" alt="imagen" />
                    <h3>Nombre: {productos.name}</h3>
                    <h3>Categoría: {productos.categoria}</h3>
                    <h3>Precio: {productos.precio}</h3>
                    <h3>Stock: {productos.stock}</h3>
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
