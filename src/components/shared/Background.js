import React, { Component } from 'react';

class Background extends Component {
  render() {
    return (
      <div className="background container-fluid">
        <div className="lines">
          <div className="line" />
          <div className="line" />
          <div className="line hidden-md-down" />
          <div className="line" />
        </div>
      </div>
    );
  }
}

export default Background;
