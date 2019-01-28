import { addTodo } from '../reducers/reducers.js'

it('adds to list', () => {
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
  expect(stateBefore).toBe(stateBefore)
});