import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Counter } from './Counter.js'
import { Todo } from './Todo.js'
import '../styles/app.css'
import {
  initialize,
  increment,
  decrement,
  addTodo,
  toggleTodo,
  showAll,
  setVisibilityFilter
} from '../actions'

class App extends Component {
  componentDidMount () {
    this.props.initialize()
  }
  render() {
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
      </div>
    );
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps, {
  initialize,
  increment,
  decrement,
  addTodo,
  toggleTodo,
  showAll,
  setVisibilityFilter
})(App)
