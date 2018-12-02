import React, { Component } from 'react';
import pattern from './pattern.svg';
import pattern_lines from './pattern_lines.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <header className="header__container">
          <img src={pattern} className="header__pattern" alt="background pattern" />
          <img src={pattern_lines} className="header__pattern__lines"  alt="background pattern lines" />
          <h1>
            Hey,<br></br>
            welcome to my portfolio,
            <br></br>
            I’m Sandra, Web Designer

          </h1>
        </header>
      </div>
    );
  }
}

export default Header;
