import React from 'react';
import './WeatherGrid.css';


const WeatherGrid = ({weather}) => {
	return (
    <div>
      {!weather ? <p>Loading</p> :  
      <div>
          <h2> Weather in {weather.city.name}</h2>
            <h3> {weather.list[0].main.temp} ° Degrees </h3> 
            <table>
              <tbody>
                <tr>
                  <td>Wind</td>
                  <td>{weather.list[0].wind.speed}</td> 
                </tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
                <tr></tr>
            </tbody>
          </table>
      </div>
        
    }
    </div> 
  )
}


export default WeatherGrid; 