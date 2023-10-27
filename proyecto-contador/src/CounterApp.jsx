import React, { useState } from 'react';

export const CounterApp = () => {
    const [contador, setContador] = useState(0);


    const incrementor = () => {
        setContador(contador + 1);
    }
    const aviso = () => {
        if(contador===10) {
            alert('Has llegado al 10');
        }
    }

    return (
        <div>
            <button onClick={incrementor}>Incrementar Contador +1</button>
            <div>Contador: {contador}</div>
        </div>
    );
}
