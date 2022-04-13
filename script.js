//fetch weather api
var apiKey = "e20fecbf0338ae51754a28dfd83d0b33";
var city = "seattle";
var requestURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
var searchBtn = document.getElementById("submitInput");

//text box searches for city
    //display city temp, wind, humidity, uv index with current date
    //display next 5 days forecast
//search history cities listed and clickable

function getWeather() {
    fetch(requestURL)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            console.log(data);
        })
}

searchBtn.addEventListener("click", getWeather);