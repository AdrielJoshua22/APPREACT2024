import React, { useState } from 'react'

export const useCounter = (valorInicial = 1) => {
    const [contador, setContador] = useState(1)

    const incrementar = (valor = 1) => {
        setContador(contador + valor)
    }
    const decrementar = (valor = 1) => {
        if (contador > 1) {
            setContador(contador - valor)
        }
    }
        const resetear = () => {
            setContador(valorInicial)
        }

        return {
            contador,
            incrementar,
            decrementar,
            resetear
        }
    }

