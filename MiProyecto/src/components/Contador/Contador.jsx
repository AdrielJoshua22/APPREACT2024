import { Container } from 'react-bootstrap';
import { useCounter } from '../../Hooks/useCounter';
import './contador.css';


export const Contador = ({ initial = 1, stock = 5, onAdd }) => {
    const { contador, incrementar, decrementar, resetear } = useCounter(initial, 1, stock);

    const handleAddToCart = () => {
        onAdd(contador);
    };

    return (
        <Container className='contador'>
            <h3>{contador}</h3>
            <button className='contador' onClick={() => decrementar()}>-1</button>
            <button className='contador' onClick={() => resetear()}>Reset</button>
            <button className='contador' onClick={() => incrementar()}>+1</button>
            <button className='contador' onClick={handleAddToCart}>Agregar a carrito</button>
        </Container>
    );
};


