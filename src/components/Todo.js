import React from 'react'

let nextTodoId = 0;

export const Todo = ({
  addTodo,
  todos
}) => (
  <div>
    <button onClick={() => {addTodo('test', nextTodoId++)}}>Add To-Do</button>
    <ul>
      {todos.map(todo =>
        <li key={todo.id}>
          {todo.text}
        </li>
      )}
    </ul>
  </div>
)
