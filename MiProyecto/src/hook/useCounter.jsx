import React, { useState } from 'react';

export const useCounter = (valorInicial = 1, stock = 5) => {
    const [counter, setCounter] = useState(valorInicial);

    const incrementar = (valor = 1) => {
        if (counter < stock) {
            setCounter(counter + valor);
        }
    };

    const decrementar = (valor = 1) => {
        if (counter > 1) {
            setCounter(counter - valor);
        }
    };

    const resetear = () => {
        setCounter(valorInicial);
    };

    return {
        counter,
        incrementar,
        decrementar,
        resetear
    };
};
