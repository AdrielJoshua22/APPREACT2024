import React, { useState } from 'react';

export const useCounter = (valorInicial = 1) => {
  const [counter, setCounter] = useState(valorInicial);

  const incrementar = (valor = 1) => {
    setCounter(prevCounter => prevCounter + valor);
  };

  const decrementar = (valor = 1) => {
    setCounter(prevCounter => {
      if (prevCounter > 1) {
        return prevCounter - valor;
      }
      return prevCounter;
    });
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
