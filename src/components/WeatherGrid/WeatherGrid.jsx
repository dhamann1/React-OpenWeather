import React from 'react';
import './WeatherGrid.css';


const WeatherGrid = ({weather}) => {
	return (
    <div>
      {!weather ? <p>Loading</p> :  
      <div className= "weatherTable">
        <h2> Weather in {weather.city.name}</h2>
        <h3> {weather.list[0].main.temp} ° Degrees </h3> 
          <table>
            <tbody>
              <tr>
                <td>Wind</td>
                <td>{weather.list[0].wind.speed}</td> 
              </tr>
              <tr>
                <td>Cloudiness</td>
                <td>{weather.list[0].weather[0].main}</td> 
              </tr>
              <tr>
                <td>Pressure</td>
                <td>{weather.list[0].main.pressure}</td> 
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{weather.list[0].main.humidity}</td> 
              </tr>
              <tr>
                <td>Geo coords</td>
                <td>{weather.city.coord.lat}</td> 
                <td>{weather.city.coord.lon}</td> 
              </tr>
            </tbody>
          </table>
      </div>
        
    }
    </div> 
  )
}


export default WeatherGrid; 