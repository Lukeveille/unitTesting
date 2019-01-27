import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Counter } from './Counter.js'
import '../styles/app.css'
import {
  initialize,
  increment,
  decrement
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
            onIncrement={this.props.increment}
            onDecrement={this.props.decrement}
          />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps, { initialize, increment, decrement })(App)
