import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav className="nav">
          <div className="nav__content">
            <div className="nav__item">About me</div>
            <div className="nav__item">Skills</div>
            <div className="nav__item">Contact</div>
          </div>
      </nav>
    );
  }
}

export default Navigation;
