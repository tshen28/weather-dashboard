//fetch weather api
var apiKey = "e20fecbf0338ae51754a28dfd83d0b33";
var searchBtn = document.getElementById("submitInput");
var fiveDay = document.getElementById("fiveDayForecastWeather");
var mainWeather = document.getElementById("mainWeather");
var cityInput = document.getElementById("cityInput");

//text box searches for city
//display city temp, wind, humidity, uv index with current date
//display next 5 days forecast
//search history cities listed and clickable

function getWeather(city) {
    let requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    fetch(requestURL)
        .then(function (res) {
            return res.json();
        })
        .then(function (weather) {
            let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=${weather.coord.lat}&lon=${weather.coord.lon}&exclude={part}&appid=${apiKey}`
            fetch(forecastUrl)
                .then(function (res) {
                    return res.json();
                }).then(function (fiveDayForecastData) {
                    mainWeather.innerHTML = `
                <div class="card col vw:1em">
                    <h3 class="city">${weather.name}</h3>
                    <h4 class="time">${moment(weather.dt, "X").format("MM/DD/YYYY")}</h4>
                    <ul class="weather-list">
                     <li class="imgs">
                         <img class="description" />
                     </li>
                        <li class="temp">Temp: <span class="temps">${weather.main.temp} F</span></li>
                        <li class="wind">Wind: <span class="winds">${weather.wind.speed} MPH</span></li>
                        <li class="humidity">
                            Humidity: <span class="humiditys">${weather.main.humidity} %</span>
                     </li>
                    </ul>
                </div>`
                    fiveDay.innerHTML = `
                <div class="card col s2">
                    <div class="card-body">
                        <h5 class="card-title day1">${moment(fiveDayForecastData.daily[1].dt, "X").format("MM/DD/YYYY")}</h5>
                        <ul class="weather-list">
                            <li class="imgs">
                                <img class="description1" />
                            </li>
                            <li class="temp">Temp: <span class="temps1">${fiveDayForecastData.daily[1].temp.day} F</span></li>
                            <li class="wind">Wind: <span class="winds1">${fiveDayForecastData.daily[1].wind_speed} MPH</span></li>
                            <li class="humidity">
                                Humidity: <span class="humiditys1">${fiveDayForecastData.daily[1].humidity} %</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card col s2">
                    <div class="card-body">
                        <h5 class="card-title day2">${moment(fiveDayForecastData.daily[2].dt, "X").format("MM/DD/YYYY")}</h5>
                        <ul class="weather-list">
                            <li class="imgs">
                                <img class="description2" />
                            </li>
                            <li class="temp">Temp: <span class="temps2">${fiveDayForecastData.daily[2].temp.day} F</span></li>
                            <li class="wind">Wind: <span class="winds2">${fiveDayForecastData.daily[2].wind_speed} MPH</span></li>
                            <li class="humidity">
                                Humidity: <span class="humiditys2">${fiveDayForecastData.daily[2].humidity} %</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card col s2">
                    <div class="card-body">
                        <h5 class="card-title day3">${moment(fiveDayForecastData.daily[3].dt, "X").format("MM/DD/YYYY")}</h5>
                        <ul class="weather-list">
                            <li class="imgs">
                                <img class="description3" />
                            </li>
                            <li class="temp">Temp: <span class="temps3">${fiveDayForecastData.daily[3].temp.day} F</span></li>
                            <li class="wind">Wind: <span class="winds3">${fiveDayForecastData.daily[3].wind_speed} MPH</span></li>
                            <li class="humidity">
                                Humidity: <span class="humiditys3">${fiveDayForecastData.daily[3].humidity} %</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card col s2">
                    <div class="card-body">
                        <h5 class="card-title day4">${moment(fiveDayForecastData.daily[4].dt, "X").format("MM/DD/YYYY")}</h5>
                        <ul class="weather-list">
                            <li class="imgs">
                                <img class="description4" />
                            </li>
                            <li class="temp">Temp: <span class="temps4">${fiveDayForecastData.daily[4].temp.day} F</span></li>
                            <li class="wind">Wind: <span class="winds4">${fiveDayForecastData.daily[4].wind_speed} MPH</span></li>
                            <li class="humidity">
                                Humidity: <span class="humiditys4">${fiveDayForecastData.daily[4].humidity} %</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card col s2">
                    <div class="card-body">
                        <h5 class="card-title day5">${moment(fiveDayForecastData.daily[5].dt, "X").format("MM/DD/YYYY")}</h5>
                        <ul class="weather-list">
                            <li class="imgs">
                                <img class="description5" />
                            </li>
                            <li class="temp">Temp: <span class="temps5">${fiveDayForecastData.daily[5].temp.day} F</span></li>
                            <li class="wind">Wind: <span class="winds5">${fiveDayForecastData.daily[5].wind_speed} MPH</span></li>
                            <li class="humidity">
                                Humidity: <span class="humiditys5">${fiveDayForecastData.daily[5].humidity} %</span>
                            </li>
                        </ul>
                    </div>
                </div>`
                })
        })
};

searchBtn.addEventListener("click", function () {
    getWeather(cityInput.value);
});