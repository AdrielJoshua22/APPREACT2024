import React, { useState } from 'react'

export const useCounter = (valorInicial = 1) => {
    const [counter, setcounter] = useState(1)

    const incrementar = (valor = 1) => {
        setcounter(counter + valor)
    }
    const decrementar = (valor = 1) => {
        if (counter > 1) {
            setcounter(counter - valor)
        }
    }
        const resetear = () => {
            setcounter(valorInicial)
        }

        return {
            counter,
            incrementar,
            decrementar,
            resetear
        }
    }

