// root

import React, { Component } from 'react';
import './App.css';
import Name from './components/name/name.js';
import Triangle from './components/triangle/triangle';
import Square from './components/square/square';
import Polygon from './components/polygon/polygon';
import Logo from './components/logo/logo';

class App extends Component {
  render() {

    return (
      <div className="container">
        <Square/>
        <Logo/>
        <Name/>
        <Triangle/>
        <Polygon/>
      </div>
    );
  }
}

export default App;
