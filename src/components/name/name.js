import React, { Component } from 'react';
import './name.css';
import Linkedin from './img/linkedin-icon.png'
import Github from './img/github-icon.png';
import Desktop from './img/desktop.svg';

class myName extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
  
      return (
        <article className="text">
            <h1>Marcus Denny</h1>
            <p className="sub">Front End Web Developer</p>
            <p className="par">Front End Developer based in London</p>
            <div className="icons">
                <a href="https://www.linkedin.com/in/marcus-y-518a7a11a/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="Linkedin link"></img></a>
                <a href="https://github.com/mjd123" target="_blank" rel="noopener noreferrer"><img src={Github} alt="Github link"></img></a>
                <a><img src={Desktop} alt="Website link"></img></a>
            </div>
        </article>
      );
    }
  }

  export default myName;