import { counter, todos } from '../reducers/reducers.js';

describe('counter reducer', () => {
  it('increments by one', () => {
    expect(counter(0, { type: 'INCREMENT' })).toBe(1);
    expect(counter(1, { type: 'INCREMENT' })).toBe(2);
  });
  
  it('decrements by one', () => {
    expect(counter(0, { type: 'DECREMENT' })).toBe(-1);
    expect(counter(1, { type: 'DECREMENT' })).toBe(0);
  });
  
  it('returns current state unchanged with invalid action type', () => {
    expect(counter(0, { type: 'BLAH' })).toBe(0);
    expect(counter(1, { type: 'SOMETHING' })).toBe(1);
  });
  
  it('returns 0 if state undefined', () => {
    expect(counter(undefined, { type: null })).toBe(0);
  });
});

describe('to-do reducer', () => {
  it('adds to to-do', () => {
    const stateBefore = [];
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'Learn unit testing'
    };
    const stateAfter = [
      {
        id: 0,
        text: 'Learn unit testing',
        completed: false
      }
    ];
  
    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);
  });

  it('toggles to-do', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'Learn unit testing',
        completed: false
      },
      {
        id: 1,
        text: 'Learn Redux',
        completed: false
      }
    ];
    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    };
    const stateAfter = [
      {
        id: 0,
        text: 'Learn unit testing',
        completed: false
      },
      {
        id: 1,
        text: 'Learn Redux',
        completed: true
      }
    ];
  
    Object.freeze(stateBefore);
    Object.freeze(action);
  
    expect(todos(stateBefore, action)).toEqual(stateAfter);
  });
});
