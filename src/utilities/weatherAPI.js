function fetchSampleWeather (){
  return (
    fetch('/api/weather/sample')
    .then(res => res.json())
  )
}


export default {
  fetchSampleWeather, 
};
