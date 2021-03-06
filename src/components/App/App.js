import React, { Component } from 'react';
import './App.css';
import logo from '../../logo.svg';
import weatherAPI from '../../utilities/weatherAPI'; 
import WeatherGrid from '../WeatherGrid/WeatherGrid';
import {Row, Input, Button} from 'react-materialize';



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

  handleSubmit = (e) => {
    e.preventDefault();
    let location = this.refs.cityName.input.value.trim();
    let queryLocation = location;
    console.log(queryLocation);
    fetch('/api/weather/search', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({queryLocation}) 
    })
    .then(res => res.json())  
    .then(weather => this.setState({weather}))
  }

  

  componentDidMount(){
    this.sampleWeather();
  }

  render() {
    return (
      <div className="App">
        <div>
        <form className="weatherBar" onSubmit={(e) => this.handleSubmit(e)}> 
         <Row>
            <Input placeholder="Enter City" name="location" ref="cityName"/> 
            <span><Button type="submit" waves="light">Forecast</Button></span> 
          </Row>
       </form> 
      </div> 
        <WeatherGrid weather={this.state.weather}/> 
      </div>
    );
  }
};

export default App;
