import React from 'react'
import Counter from '../molecules/Counter'
import useCounter from '../hooks/CounterHook'


const CounterPage = () => {
    const { count, increment, decrement, reset } = useCounter();
    return (<Counter count={count} onIncrement={increment} onDecrement={decrement} onReset={reset}></Counter>)
}

export default CounterPage