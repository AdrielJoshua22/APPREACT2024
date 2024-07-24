import { useCounter } from "../../hook/useCounter.jsx";
import "./ItemCount.css";

const ItemCount = ({ initial = 1, stock = 5, onAdd }) => {
    const { contador, incrementar, decrementar } = useCounter(initial, stock);

    return (
        <center>
            <button onClick={incrementar}> + 1</button> 
            <h3>{contador} CONTADOR</h3>
            <button onClick={decrementar}> - 1</button> 
            <button onClick={() => { onAdd(contador) }}>Agregar al carrito</button>
        </center>
    );
};

export default ItemCount;

