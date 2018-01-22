function fetchSampleWeather (){
  return (
    fetch('/api/weather/sample')
     .then(res => res.json())
  )
}

function fetchSearch (city){
} 


export default {
  fetchSampleWeather, 
  fetchSearch
};
