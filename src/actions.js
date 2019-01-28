import {
  INITIALIZE,
  DECREMENT,
  INCREMENT,
  ADD_TODO
} from './actionTypes';

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
