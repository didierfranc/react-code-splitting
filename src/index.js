import React from 'react'
import PropTypes from 'prop-types'

export default class Async extends React.Component {
  componentWillMount = () => {
    this.props.load.then((c) => { 
      this.C = c
      if (!this.cancelUpdate) {
        this.forceUpdate()
      }
    })
  }

  componentWillUnmount = () => {
    this.cancelUpdate = true
  }

  render = () => {
    const {componentProps} = this.props
    return this.C ? <this.C.default {...componentProps} /> : null
  }
}

Async.propTypes = {
  load: PropTypes.instanceOf(Promise).isRequired,
}
