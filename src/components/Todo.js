import React from 'react'

let nextTodoId = 0;

export const Todo = ({
  addTodo,
  todos,
  toggleTodo,
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
        <li
          key={todo.id}
          style={{
            textDecoration: todo.completed? 'line-through' : 'none'
          }}
          onClick={() => toggleTodo(todo.id)}
        >
        {todo.text}
        </li>
      )}
    </ul>
  </div>
)
