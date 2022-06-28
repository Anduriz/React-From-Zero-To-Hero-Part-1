import React from 'react';

// useState Hook
import { useState } from 'react';

import PropTypes from 'prop-types';

export const CounterApp = ( {value} ) => {

    // Requiere recibir el valor inicial
    const [ counter, setCounter ] = useState ( value );

    const handle = {
        Add: () => setCounter( counter + 1 ),
        Substract: () => setCounter( counter - 1 ),
        Reset: () => setCounter( value ),
    }

    // const handleAdd = () => {
    //     // console.log(event);
    //     setCounter( counter + 1 );
    //     // setCounter((c)=>c+1)
    // }

    // const handleSubstract = () => setCounter( counter - 1 );

    // const handleReset = () => setCounter( value );

    return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ handle.Substract }>
            -1
        </button>
        
        <button onClick={ handle.Reset }>
            Reset
        </button>
        <button onClick={ handle.Add }>
            +1
        </button>

    </>
  )
}

CounterApp.protoTypes = {
    value: PropTypes.number.isRequired,
}