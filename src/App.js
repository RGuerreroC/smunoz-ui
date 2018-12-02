import React, { Component } from 'react';
import './App.scss';

import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigation />
        
      </div>
    );
  }
}

export default App;
