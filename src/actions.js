import {
  INITIALIZE,
  DECREMENT,
  INCREMENT
} from './actionTypes';

export const initialize = () => ({
  type: INITIALIZE
});

export const increment = () => ({
  type: DECREMENT
});

export const decrement = () => ({
  type: INCREMENT
});