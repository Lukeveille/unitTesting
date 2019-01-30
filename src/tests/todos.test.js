import { todos } from '../reducers/todos.js';

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
