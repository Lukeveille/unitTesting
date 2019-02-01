import React from 'react'

export const Todo = ({
  todo,
  toggleTodo
}) => (
  <li
    style={{ textDecoration: todo.completed? 'line-through' : 'none' }}
    onClick={() => toggleTodo(todo.id)}
  >
    {todo.text}
  </li>
)
