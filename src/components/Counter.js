import React from 'react'

export const Counter = ({
  value,
  increment,
  decrement
}) => (
  <div>
    <h2>{value}</h2>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
)
