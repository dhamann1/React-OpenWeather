import React from 'react';
import './WeatherGrid.css';



const WeatherGrid = ({weather}) => {
	return (
    <div>
      {!weather ? <p>Loading</p> : 
      <div className= "weatherTable">
        <h2> Weather in {weather.name}, US</h2>
        <h3> {weather.main.temp} °C </h3> 
          <table>
            <tbody>
              <tr>
                <td>Wind</td>
                <td>{weather.wind.speed} m/h</td> 
              </tr>
              <tr>
                <td>Cloudiness</td>
                <td>{weather.weather[0].description}</td> 
              </tr>
              <tr>
                <td>Pressure</td>
                <td>{weather.main.pressure}</td> 
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{weather.main.humidity} %</td> 
              </tr>
              <tr>
                <td>Sunrise</td>
                <td>{weather.sys.sunrise}</td> 
              </tr>
              <tr>
                <td>Sunset</td>
                <td>{weather.sys.sunset}</td> 
              </tr>
              <tr>
                <td>Geo coords</td>
                <td>{weather.coord.lat}, {weather.coord.lon}</td> 
              </tr>
            </tbody>
          </table>
      </div>   
    }
    </div> 
  )
}


export default WeatherGrid; 