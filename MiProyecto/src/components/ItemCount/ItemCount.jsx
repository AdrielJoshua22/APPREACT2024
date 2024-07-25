import { useCounter } from "../../hook/useCounter.jsx";
import "./ItemCount.css";

const ItemCount = ({ initial = 1, stock = 5, onAdd }) => {
    const { contador, incrementar, decrementar } = useCounter(initial, stock);

    const handleAdd = () => {
        const count = Number(contador); // Asegúrate de que contador es un número
        onAdd(count);
    };

    return (
        <center>
            <button onClick={incrementar}> + 1</button> 
            <h3>{contador}</h3>
            <button onClick={decrementar}> - 1</button> 
            <button onClick={handleAdd}>Agregar al carrito</button>
        </center>
    );
};

export default ItemCount;


