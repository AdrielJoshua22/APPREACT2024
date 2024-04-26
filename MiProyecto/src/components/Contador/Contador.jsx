import { useCounter } from '../../Hooks/useCounter'


export const Contador = () => {

  const {contador,incrementar,decrementar,resetear} = useCounter(0)

  return(
    <>
    <h1>Contador: {contador}</h1>
    <button  onClick={() => decrementar()}>-1</button>
    <button  onClick={() => resetear()}>Reset</button>
    <button  onClick={() => incrementar()}>+1</button>
    </>
  )
}
