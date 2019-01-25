import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initialize } from './actions'
import logo from './logo.svg'
import './app.css'

class App extends Component {
  sayHello() {
    return 'Hello'
  }
  componentDidMount () {
    this.props.initialize()
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h3>This project was bootstrapped using <a href='https://www.npmjs.com/package/create-javascript-app'>create-javascript-app</a></h3>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/app.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return state
}

export const hello = () => { return 'Hello' }

export const add = (x,y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return null;
  }
  return x+y;
}


export default connect(mapStateToProps, { initialize })(App)