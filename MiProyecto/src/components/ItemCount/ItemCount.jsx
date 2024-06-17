import React, { useState } from 'react';
import { Contador } from '../contador/contador';

 const ItemCount = () => {
    const [isCant, setIsCant] = useState(false);
    const [cantidad, setCantidad] = useState(0);

    const onAdd = (count) => {
        console.log('la cantidad seleccionada :', count);
        setCantidad(count);
        setIsCant(true);
    }

    return (
        <div>
            {isCant ?
                <button>Terminar compra</button>
                :
                <Contador onAdd={onAdd} />
            }
        </div>
    )

}
export default ItemCount
