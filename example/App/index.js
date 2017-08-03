import React, { Component } from 'react'
import { render } from 'react-dom'
import Async from '../../dist/react-code-splitting.min'


const Fat = () => <Async load={import('./Fat')} />

class App extends Component {
  state = {
    load: false
  }
  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ load: true })}
        >
          Load my fat component
        </button>
        {this.state.load && <Fat />}
      </div>
    )
  }
}


render(<App />, document.querySelector('react'))