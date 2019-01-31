import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Counter } from './Counter.js'
import { Todo } from './Todo.js'
import { FilterLink } from './FilterLink.js'
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
      {action: showAll, name: 'All'},
      {action: showActive, name: 'Active'},
      {action: showCompleted, name: 'Completed'}
    ];
    const visibleTodos = this.getVisibleTodos()
    console.log(this.props)
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React/Redux</h2>
        </div>
          <Counter
            value={this.props.counter}
            increment={this.props.increment}
            decrement={this.props.decrement}
          />
          <Todo 
            addTodo={this.props.addTodo}
            todos={this.props.todos}
            toggleTodo={this.props.toggleTodo}
          />
          <p>
            Show:
            {filters.map((filter) => {
              return (
              <span key={filter.action}>
                {' '}
                <FilterLink
                  filter={filter.action}
                  setVisibilityFilter={setVisibilityFilter}
                  children={filter.name}
                />
              </span>
              )
            })}
          </p>
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
