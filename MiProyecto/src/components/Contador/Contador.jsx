/* import { Container } from 'react-bootstrap';
import { useCounter } from '../../hook/useCounter';
import './contador.css';


export const counter = ({ initial = 1, stock = 5, onAdd }) => {
    const { counter, incrementar, decrementar, resetear } = useCounter(initial, 1, stock);

    const handleAddToCart = () => {
        onAdd(counter);
    };

    return (
        <Container className='counter'>
            <h3>{counter}</h3>
            <button className='counter' onClick={() => decrementar()}>-1</button>
            <button className='counter' onClick={() => resetear()}>Reset</button>
            <button className='counter' onClick={() => incrementar()}>+1</button>
            <button className='counter' onClick={handleAddToCart}>Agregar a carrito</button>
        </Container>
    );
}; */


