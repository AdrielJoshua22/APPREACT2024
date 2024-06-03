import React from 'react'

export const ItemCount = () => {
    const [isCant, setIsCant] = useState(false)

    const onAdd=()=>{
        console.log('la cantidad seleccionada :',cantidad)
        setIsCant(true)
    }
  return (
    <div>
        {isCant ?
            <ItemCount onAdd={onAdd}/>
            :

            <button>terminar compra</button>
        }
      
    </div>
  )
}
