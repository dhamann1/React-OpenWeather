import React, { Component } from 'react';
import './App.css';
import logo from '../../logo.svg';
import weatherAPI from '../../utilities/weatherAPI'; 
import WeatherGrid from '../WeatherGrid/WeatherGrid';


class App extends Component {
  constructor(){
    super();
    this.state = {
      weather: null 
    }
  };

  sampleWeather = () => {
    weatherAPI.fetchSampleWeather()
    .then(weather => this.setState({weather}))

  }

  componentDidMount(){
    this.sampleWeather();
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
