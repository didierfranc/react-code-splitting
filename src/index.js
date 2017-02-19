import React from 'react'

export default class Async extends React.Component {
  componentWillMount = () => {
    this.props.load.then((c) => { this.C = c; this.forceUpdate() })
  }

  render = () => {
    const {componentProps} = this.props
    return this.C ? <this.C.default {...componentProps} /> : null
  }
}

Async.propTypes = {
  load: React.PropTypes.instanceOf(Promise).isRequired,
}
