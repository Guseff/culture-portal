import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

import Main from './views/Main'

const routing = (
  <Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <div>
      <Route exact path="/" component={Main} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
