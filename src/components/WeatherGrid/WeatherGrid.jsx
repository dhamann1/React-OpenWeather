import React from 'react';
import './WeatherGrid.css';


const WeatherGrid = ({weather}) => {
	return (
    <div>
			{!weather ? <p>Loading</p> : <p>{weather.city.name}</p> }
    </div> 
  )
}


export default WeatherGrid; 