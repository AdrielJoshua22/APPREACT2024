import { useCartContext } from "../../context/cartContext"


export const CartContainer = () => {
    const {cartList,  vaciarCarrtio} = useCartContext

    return (
        <div>
            {cartList.map(prod => (
                <div className="w-50">
                    <img className="w-25" src={prod.foto} alt="imagen"/>
                    <label> Precio {prod.price} - Cantidad : {prod.cantidad}</label>
                    <button > X </button>
                </div>
            ))}
            <button onClick={vaciarCarrtio} className="btn btn-outline-danger">Vaciar Carrito</button>
        </div>
    )
}
