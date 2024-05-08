import { Container } from 'react-bootstrap'
import { useCounter } from '../../Hooks/useCounter'
import './contador.css'

export const Contador = () => {

  const {contador,incrementar,decrementar,resetear} = useCounter(0)

  return(
    <Container className='contador' >
    <h3>Contador: {contador}</h3>
    <button className='contador' onClick={() => decrementar()}>-1</button>
    <button  className='contador' onClick={() => resetear()}>Reset</button>
    <button  className='contador' onClick={() => incrementar()}>+1</button>
    <button  className='contador' onClick >Agregar a carrito</button>
    </Container>
  ) 
}
