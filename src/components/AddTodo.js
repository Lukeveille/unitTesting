import React from 'react'

let nextTodoId = 0;

export const AddTodo = ({
  addTodo,
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
  </div>
)
