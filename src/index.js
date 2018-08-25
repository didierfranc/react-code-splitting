import React from 'react'
import PropTypes from 'prop-types'

export default class Async extends React.Component {
  state={
    loading: true,
    Component: null
  }
  componentDidMount = () => {
    this.props.load.then((c) => { 
      this.setState({loading:false, Component: c})
    })
  }

  render = () => {
    const { Component, loading} = this.state
    const { loader: Loader, componentProps } =  this.props;
    if(!loading){
      return Component ?
        Component.default
          ? <Component.default {...componentProps} />
          : <Component {...componentProps} />
        : null  
    } else {
      return Loader ?
        typeof Loader === 'string' ? Loader : <Loader />
        : null
      }
  }
}

Async.propTypes = {
  load: PropTypes.instanceOf(Promise).isRequired,
  loader: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

Async.defaultProps = {
  loader: null
}
