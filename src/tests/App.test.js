import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import configureStore from '../store'
import routes from '../routes'

import { hello } from '../App';
import { add } from '../App';
import App from '../App';

describe('renders properly', () => {
  it('renders without crashing', () => {
    const history = createHistory();
    const store = configureStore(history);
    const div = document.createElement('div');
  
    // ReactDOM.render(<App/>, div)
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
            {routes}
        </ConnectedRouter>
      </Provider>,
      div
    );
  });
});

describe('hello', () => {
  it('says hello', () => {
    // hello() === 'Hello';
    expect(hello()).toBe('Hello');
  });
});

describe('addition', () => {
  it('adds two numbers', () => {
    expect(add(2,3)).toBe(5);
  });
  it('does not add numbers and strings', () => {
    expect(add(2,'3')).toBe(null);
  });
  it('does not add numbers and objects', () => {
    expect(add(2,{})).toBe(null);
  });
});