import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

var config = {
  headers: {'Access-Control-Allow-Origin': true}
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }


  componentDidMount(){
    axios.get('http://localhost:4001/api/trucks', config ).then(
      (data) => {
        console.log(data);
      }).catch(()=> {
        console.log('Error getting data');
      });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
