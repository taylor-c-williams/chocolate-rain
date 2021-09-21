import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Body from './Body.js';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />        
      </div>
    );
  }
}
