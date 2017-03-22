import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends Component {
  render() {
    return (
      <h1> Hey there, {this.props.name}</h1>
    );
  }
}

export default Hello;
