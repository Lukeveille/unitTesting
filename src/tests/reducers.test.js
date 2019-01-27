import { counter } from '../reducers/reducers.js';

it('increments by one', () => {
  expect(counter(0, { type: 'INCREMENT' })).toBe(1);
  expect(counter(1, { type: 'INCREMENT' })).toBe(2);
});

it('decrements by one', () => {
  expect(counter(0, { type: 'DECREMENT' })).toBe(-1);
  expect(counter(1, { type: 'DECREMENT' })).toBe(0);
});

it('returns null with invalid action type', () => {
  expect(counter(0, { type: 'BLAH' })).toBe(0);
  expect(counter(1, { type: 'SOMETHING' })).toBe(1);
});

it('returns 0 if state undefined', () => {
  expect(counter(undefined, { type: null })).toBe(0);
});