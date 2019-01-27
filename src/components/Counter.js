import React from 'react'

export const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h2>{value}</h2>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
  </div>
)
