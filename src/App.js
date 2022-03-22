import React, { Component } from 'react'
import './App.css';
import BackgroundVideo from './BackgroundVideo';
import Main from './Main';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Main/>
        <BackgroundVideo/>
      </div>
    )
  }
}

