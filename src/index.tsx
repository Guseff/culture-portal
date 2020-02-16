import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

import App from './App'

const routing = (
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">Contact</Link>
      </li>
    </ul>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
