const INITIALIZE = 'INITIALIZE';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_TODO = 'ADD_TODO';

export const initialize = () => ({
  type: INITIALIZE
});

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const addTodo = () => ({
  type: ADD_TODO
});
