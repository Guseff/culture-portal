import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

import Main from './views/Main'
import Header from './components/Header/Header'

const routing = (
  <Router>
    <Header />
    <div>
      <Route exact path="/" component={Main} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
