import React, { Component } from 'react';
import Home from './home/Home';
import Nav from './shared/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Home />
      </div>
    );
  }
}

export default App;
