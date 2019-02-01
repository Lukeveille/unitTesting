import React from 'react'
import { Todo } from './Todo.js'
import { AddTodo } from './AddTodo.js'

export const TodoList = ({
  addTodo,
  todos,
  toggleTodo,
  input
}) => (
  <div>
    <AddTodo
      addTodo={addTodo}
      input={input}
    />
    {/* <input ref={node => { input = node; }} />
    <button onClick={() => {
      addTodo(input.value, nextTodoId++);
      input.value = '';
    }}>
      Add To-Do
    </button> */}
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
        />
      )}
    </ul>
  </div>
)
