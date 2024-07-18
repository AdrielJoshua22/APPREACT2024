import { useCounter } from "../../hook/useCounter.jsx"

const ItemCount = ({ inital=1, stock=5, onAdd }) => {

    const { counter, handleSumar, handleRestar } = useCounter(inital, 1, stock);

    return (
        <center>
            <button onClick={handleSumar}> + 1</button> 
            <h3>{counter}</h3>
            <button onClick={handleRestar}> - 1</button> 
            <button onClick={ ()=>{onAdd(counter)} }>Agregar al carrito</button>
        </center>
    )
}

export default ItemCount