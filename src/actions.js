const INITIALIZE = 'INITIALIZE';
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SHOW_ALL = 'SHOW_ALL';
const SHOW_ACTIVE = 'SHOW_ACTIVE';
const SHOW_COMPLETED = 'SHOW_COMPLETED';
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
  text,
  id
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
});

export const showAll = () => ({
  type: SHOW_ALL
});

export const showActive = () => ({
  type: SHOW_ACTIVE
});

export const showCompleted = () => ({
  type: SHOW_COMPLETED
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
