import React, { Component } from 'react';
import './styles/App.scss';

import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import Section from './components/section/Section';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        <Section />
      </div>
    );
  }
}

export default App;
