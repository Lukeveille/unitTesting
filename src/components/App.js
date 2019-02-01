import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Counter } from './Counter.js'
import { TodoList } from './TodoList.js'
import { Footer } from './Footer.js'
import '../styles/app.css'
import {
  initialize,
  increment,
  decrement,
  addTodo,
  toggleTodo,
  showAll,
  showActive,
  showCompleted,
  setVisibilityFilter
} from '../actions'

class App extends Component {
  getVisibleTodos(todos, filter) {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(
          t => t.completed
        );
      case 'SHOW_ACTIVE':
        return todos.filter(
          t => !t.completed
        );
      default:
        return todos;
    }
  }

  componentDidMount () {
    this.props.initialize()
  }
  render() {
    const filters = [
      {action: showAll().type, name: 'All'},
      {action: showActive().type, name: 'Active'},
      {action: showCompleted().type, name: 'Completed'}
    ];
    const {
      todos,
      visibilityFilter,
      increment,
      decrement,
      addTodo,
      toggleTodo,
      counter,
      setVisibilityFilter
    } = this.props;
    const visibleTodos = this.getVisibleTodos(
      todos,
      visibilityFilter,
    );

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React/Redux</h2>
        </div>
          <Counter
            value={counter}
            increment={increment}
            decrement={decrement}
          />
          <TodoList
            addTodo={addTodo}
            todos={visibleTodos}
            toggleTodo={toggleTodo}
          />
          <Footer
            filters={filters}
            visibilityFilter={visibilityFilter}
            setVisibilityFilter={setVisibilityFilter}
          />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {
  initialize,
  increment,
  decrement,
  addTodo,
  toggleTodo,
  showAll,
  showActive,
  showCompleted,
  setVisibilityFilter
})(App)
