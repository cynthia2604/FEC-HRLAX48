import React from 'react';

const Tracker = (WrappedComponent, componentName) => {
  return class extends React.Component {
    handleClick(e) {
      console.log('module: ', componentName, 'element: ', e.target);
    }
    render() {
      return (
        <div onClick={this.handleClick}>
          <WrappedComponent />
        </div>
      );
    }
  };
};

export default Tracker;
