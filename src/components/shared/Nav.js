import React, { Component } from 'react';
import Logo from '../../logo-01.svg';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <img className="logo" alt="Riplo" src={Logo} />
          <h1 className="logo-text">Riplo</h1>
        </nav>
        <div className="nav-space" />
      </div>
    );
  }
}

export default Nav;
