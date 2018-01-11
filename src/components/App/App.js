import React, { Component } from 'react';
import './App.css';
import logo from '../../logo.svg';
import API from '../../api/api'; 
import WeatherGrid from '../WeatherGrid/WeatherGrid';


class App extends Component {
  constructor(){
    super();
    this.state = {
      weather: null 
    }
  };

  componentDidMount(){
    API.fetchWeatherForcast().then((data) => {
      this.setState({
        weather: data 
      })
    }); 
  }





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <WeatherGrid weather={this.state.weather}/> 
      </div>
    );
  }
};

export default App;
