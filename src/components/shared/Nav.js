import React, { Component } from 'react';
import Logo from '../../img/riplo.svg';

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
      if (document.documentElement.scrollTop > 20) {
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
          <h1 className="logo-text">Riplo</h1>
          <div className="links">
            <a>Home</a>
            <a>About</a>
            <a>Projects</a>
            <a>Contact</a>
          </div>
        </nav>
        <div className="nav-space" />
      </div>
    );
  }
}

export default Nav;
