import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Myreact.styles';

class Myreact extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Myreact will mount');
  }

  componentDidMount = () => {
    console.log('Myreact mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Myreact will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Myreact will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Myreact did update');
  }

  componentWillUnmount = () => {
    console.log('Myreact will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="MyreactWrapper">
        Test content
      </div>
    );
  }
}

Myreact.propTypes = {
  // bla: PropTypes.string,
};

Myreact.defaultProps = {
  // bla: 'test',
};

export default Myreact;
