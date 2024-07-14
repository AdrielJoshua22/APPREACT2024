import { useCartContext } from "../../context/CartContext.jsx";


export const CartContainer = () => {
    const { cartList, vaciarCarrito } = useCartContext();

    if (cartList.length === 0) {
        return <p>El carrito está vacío.</p>;
    }

    return (
        <div>
            {cartList.map((producto, index) => (
                <div key={index} className="w-50">
                    <img className="w-25" src={producto.foto} alt="imagen del producto" />
                    <label> Precio: {producto.price} - Cantidad: {producto.cantidad}</label>
                    <button> X </button>
                </div>
            ))}
            <button onClick={vaciarCarrito} className="btn btn-outline-danger">Vaciar Carrito</button>
        </div>
    );
};
