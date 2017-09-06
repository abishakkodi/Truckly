import React, { Component } from 'react';
import './App.css';
import Posts from './Components/Posts.js';
import Signups from './Components/Signups.js';

const axios = require('axios');


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trucks: [],
      rentalInfo: true
    }
  }

  fetchNewData = () => {
     axios.get('http://localhost:4001/api/trucks')
    .then(
      (res) => {
          this.setState({trucks: res.data});
      })
    .then(() => {

     console.log(this.state.trucks);

    })
    .catch((error)=> {
        console.log('Error getting data');
        console.log(error);
      });
  }

  componentDidMount = () => {
    axios.get('http://localhost:4001/api/trucks')
    .then(
      (res) => {
          this.setState({trucks: res.data});
      })
    .then(() => {

     console.log(this.state.trucks);

    })
    .catch((error)=> {
        console.log('Error getting data');
        console.log(error);
      });


  }

  toggleRent = () => {
    this.setState({rentalInfo: true});
  }

  togglePost = () => {
    this.setState({rentalInfo: false});
  }

  render = () => {
    return (
      <div className="App">
        <h2 className="title"> Truckly: Smarter Truck Rentals </h2>
       <section className="container">
    <div className="one" onClick={this.toggleRent}> Rent </div>
    <div className="two" onClick={this.togglePost}> Post </div>
</section>

        {this.state.rentalInfo? <Posts data={this.state.trucks}/> : <Signups />}
      </div>
    );
  }
}





export default App;
