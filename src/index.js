import React from 'react';
import PropTypes from 'prop-types';

export default class Async extends React.Component {
  componentWillMount = () => {
    this.cancelUpdate = false;
    this.props.load.then((c) => {
      setTimeout(() => {
        this.C = c;
        if (!this.cancelUpdate) {
          this.forceUpdate();
        }
      }, this.props.mockTimeout);
    });
  };

  componentWillUnmount = () => {
    this.cancelUpdate = true;
  };

  render = () => {
    const { componentProps } = this.props;
    return this.C
      ? this.C.default
        ? <this.C.default {...componentProps} />
        : <this.C {...componentProps} />
      : (this.props.loader ? <this.props.loader/> : null);
  };
}

// https://facebook.github.io/react/docs/typechecking-with-proptypes.html
Async.propTypes = {
  load       : PropTypes.instanceOf(Promise).isRequired,
  loader     : PropTypes.any,
  mockTimeout: PropTypes.number,
};