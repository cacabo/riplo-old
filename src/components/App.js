import React, { Component } from 'react';
import Home from './home/Home';
import Nav from './shared/Nav';
import Background from './shared/Background';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Background />
        <Home />
      </div>
    );
  }
}

export default App;
