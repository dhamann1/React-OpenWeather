const API = {
  fetchWeatherForcast: function(){
    let URI = `https://api.openweathermap.org/data/2.5/forecast?id=3882428&APPID=51eca1bce7aa6833f0a35b6c6a989fb6`
    return (
      fetch(URI, {
        method: 'get'
      })
      .then(response => response.json())
    )
  }
};


export default API; 
