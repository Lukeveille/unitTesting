import React from 'react'

let nextTodoId = 0;

export const Todo = ({
  addTodo,
  todos,
  input
}) => (
  <div>
    <input ref={node => { input = node; }} />
    <button onClick={() => {
      addTodo(input.value, nextTodoId++);
      input.value = '';
    }}>
      Add To-Do
    </button>
    <ul>
      {todos.map(todo =>
        <li key={todo.id}>
          {todo.text}
        </li>
      )}
    </ul>
  </div>
)
