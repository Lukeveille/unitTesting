const INITIALIZE = 'INITIALIZE';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SHOW_ALL = 'SHOW_ALL';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const initialize = () => ({
  type: INITIALIZE
});

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const addTodo = (text, id) => ({
  type: ADD_TODO,
  text: text,
  id: id
});

export const toggleTodo = () => ({
  type: TOGGLE_TODO
});

export const showAll = () => ({
  type: SHOW_ALL
});

export const setVisibilityFilter = () => ({
  type: SET_VISIBILITY_FILTER
});
