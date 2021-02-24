function getWeather(){
    let temperature = document.getElementById("temperature");
    let description = document.getElementById("description");
    let location = document.getElementById("location");
    let icon = document.getElementById("icon");
    
let api = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "df74fb893028a4185e13b69b55b7db46";

navigator.geolocation.getCurrentPosition(success, error);
   

function success(position){
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    
    let url =
      api +
      "?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&appid=" +
      apiKey +
      "&units=metric";
    

    
    
    fetch(url)
        .then(response => response.json())
          .then(data => {
        console.log(data);
        let temp = data.main.temp;
        temperature.innerHTML = temp + "° C";
        location.innerHTML =
          data.name + " (" + latitude + "°, " + longitude + "°)";
        description.innerHTML = data.weather[0].main;
        
var iconCode = data.weather[0].icon
var imageShown = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";

   
document.getElementById('icons').src = imageShown;

      });
   
}  
 
 
    
    
function error(){
    location.innerHTML = "Cannot get your location";
}
}
getWeather()




