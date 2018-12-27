import React, { Component } from 'react';
import './square.css';

class square extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
  
      return (
        <div className="square-container">
            <div className="square"></div>
        </div>
      );
    }
  }

  export default square;