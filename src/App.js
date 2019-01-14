import React, { Component } from 'react';
import './App.css';
import'./containers/css/style.css'
import MainPage from './containers/MainPage'
import {BrowserRouter} from 'react-router-dom'


class App extends Component {
  render() {
    return (
        <div className="App">
            <BrowserRouter><MainPage/></BrowserRouter>
        </div>
    );
  }
}

export default App;
