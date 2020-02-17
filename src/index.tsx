import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'


import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'

const routing = (
  <Router>
    <Header />
    <Main />
    <Footer />
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
