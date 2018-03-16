import React, { Component } from 'react';
import Logo from '../../logo-01.svg';
import WhiteLogo from '../../logo-02.svg';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    const scrolled = () => {
      if (!this.state.scrolled) {
        this.setState({scrolled: true});
      }
    }

    const unscrolled = () => {
      if (this.state.scrolled) {
        this.setState({scrolled: false});
      }
    }

    window.addEventListener('scroll', function() {
      if (document.documentElement.scrollTop > 10) {
        scrolled();
      } else {
        unscrolled();
      }
    });
  }

  render() {
    return (
      <div>
        <nav className={this.state.scrolled ? "scrolled" : ""}>
          <img className="logo" alt="Riplo" src={Logo} />
          <img className="logo" alt="Riplo" id="white" src={WhiteLogo} />
          <h1 className="logo-text">Riplo</h1>
        </nav>
        <div className="nav-space" />
      </div>
    );
  }
}

export default Nav;
