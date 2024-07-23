import { useCounter } from "../../hook/useCounter.jsx"
import "./ItemCount.css"
const ItemCount = ({ initial=1, stock=5, onAdd }) => {

    const { counter, incrementar, decrementar } = useCounter(initial, 1, stock);

    return (
        <center>
            <button onClick={incrementar}> + 1</button> 
            <h3>{counter}CONTADOR</h3>
            <button onClick={decrementar}> - 1</button> 
            <button onClick={ ()=>{onAdd(counter)} }>Agregar al carrito</button>
        </center>
    )
}

export default ItemCount