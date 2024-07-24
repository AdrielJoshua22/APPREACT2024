import React, { useState } from 'react';

export const useCounter = (valorInicial = 1) => {
    const [contador, setContador] = useState(valorInicial);

    const incrementar = (valor = 1) => {
        setContador(prevContador => prevContador + valor);
    };

    const decrementar = (valor = 1) => {
        setContador(prevContador => (prevContador > 1 ? prevContador - valor : prevContador));
    };

    const resetear = () => {
        setContador(valorInicial);
    };

    return {
        contador,
        incrementar,
        decrementar,
        resetear
    };
};
