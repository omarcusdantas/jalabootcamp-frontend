import React from 'react'
import '../styles/counter.css'

//Alguem disse que isso funciona
export default function Counter({ count, onIncrement, onDecrement, onReset }) {

    return (
        <div className='counter'>
            <button onClick={ onIncrement }>+</button>
            <span>{ count }</span>
            <button onClick={ onDecrement }>-</button>
            <button onClick={ onReset }>Reset</button>
        </div>
    )
}