import React from 'react';
import './WeatherGrid.css';
import {Container, Table} from 'react-materialize';



const WeatherGrid = ({weather}) => {
	return (
    <Container> 
      {!weather ? <p>Loading</p> : 
      <div className= "weatherTable">
        <h2> Weather in {weather.name}, US</h2>
        <h3> {weather.main.temp} °F </h3> 
          <Table>
            <tbody>
              <tr>
                <td className="inputTitle">Wind</td>
                <td className="inputField">{weather.wind.speed} m/h</td> 
              </tr>
              <tr>
                <td className="inputTitle">Cloudiness</td>
                <td className="inputField">{weather.weather[0].description}</td> 
              </tr>
              <tr>
                <td className="inputTitle">Pressure</td>
                <td className="inputField">{weather.main.pressure}</td> 
              </tr>
              <tr>
                <td className="inputTitle">Humidity</td>
                <td className="inputField">{weather.main.humidity} %</td> 
              </tr>
              <tr>
                <td className="inputTitle">Sunrise</td>
                <td className="inputField">{weather.sys.sunrise}</td> 
              </tr>
              <tr>
                <td className="inputTitle">Sunset</td>
                <td className="inputField">{weather.sys.sunset}</td> 
              </tr>
              <tr>
                <td className="inputTitle">Geo coords</td>
                <td className="inputField">{weather.coord.lat}, {weather.coord.lon}</td> 
              </tr>
            </tbody>
          </Table>
      </div>   
    }
    </Container> 
  )
}


export default WeatherGrid; 