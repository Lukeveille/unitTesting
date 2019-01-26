import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initialize } from './actions'
import './app.css'

class Ting extends Component {
  componentDidMount () {
    this.props.initialize()
  }
  render() {
    return (
      <div>
        It's the ting!
      </div>
    );
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps, { initialize })(Ting)