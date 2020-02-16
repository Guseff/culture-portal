import 'bootstrap/dist/css/bootstrap.css'

import * as React from 'react'

class App extends React.Component {
  title: string
  name: string

  constructor(props: Readonly<{}>) {
    super(props)
    this.title = 'Mr.'
    this.name = 'Ronnie'
  }

  render() {
    return <div>Hallo, World!</div>
  }
}

export default App
