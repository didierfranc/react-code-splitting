import React from 'react'
import PropTypes from 'prop-types'

export default class Async extends React.Component {
  componentWillMount = () => {
    this.cancelUpdate = false
    let {load} = this.props
    if (typeof load === 'function' && !load.then) load = load(this)
    load.then((c) => {
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
    return this.C
      ? this.C.default
        ? <this.C.default {...componentProps} />
        : <this.C {...componentProps} />
      : null
  }
}

Async.propTypes = {
  load: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(Promise)]).isRequired,
}
