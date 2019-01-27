import App from './components/App.js'
import Ting from './components/Ting.js'
import { Route } from 'react-router'
import React from 'react'

const routes = (
  <div>
    <Route exact path="/" component={App} />
    <Route exact path="/ting" component={Ting} />
  </div>
)

export default routes
