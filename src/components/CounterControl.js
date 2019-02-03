import React from 'react'
import { Counter } from './Counter.js'

export const CounterControl = ({
  counter,
  increment,
  decrement
}) => (
  <div>
    <Counter 
      value={counter}
      increment={increment}
      decrement={decrement}
    />
  </div>
)