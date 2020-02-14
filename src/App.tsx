import 'bootstrap/dist/css/bootstrap.css'

import * as React from 'react'

import Test from './components/Test'

class App extends React.Component {
  title: string
  name: string

  constructor(props: Readonly<{}>) {
    super(props)
    this.title = 'Mr.'
    this.name = 'Ronnie'
  }

  render() {
    return (
      <div>
        Hallo,
        <Test title={this.title} name={this.name} />
      </div>
    )
  }
}

export default App