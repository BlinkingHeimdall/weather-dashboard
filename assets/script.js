let cityInput = document.querySelector('.input');
let submitBtn = document.querySelector('#search');
let currentCityEl = document.querySelector("current-city")

let submitBtnHandler = function(event) {
    event.preventDefault();
    
    let currentCity = cityInputEl.value.trim();

    if (currentCity) {
        getWeather(currentCity);
        cityInputEl.value = "";
        currentCityEl.innerText = currentCity;
    }
    else
    {
        alert("Please Enter a City");
    }
}

let getWeather = function(currentCity) {
    let apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&units=imperialappid=15022751718f984d0ffd39a5ca1c8332";
    fetch(apiURL).then(function(response) {
        response.json().then(function(data) {

            let lat = data.coord.lat;
            let lon = data.coord.lon;

            let apiURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=15022751718f984d0ffd39a5ca1c8332";

            fetch(apiURL2).then(function(response) {
                response.json().then(function(data) {
                    // weather icon
                var icon= data.current.weather[0].icon;
                var iconLink = "https://openweathermap.org/img/w/" + icon + ".png";
                console.log(iconLink);





                // current temp added to html
                var currentTempEl = document.getElementById("temp");
                currentTempEl.textContent = "Temperature: " + data.current.temp + " Degrees";

                // wind speed
                var currentWindEl = document.getElementById("wind");
                currentWindEl.textContent = "Wind: " + data.current.wind_speed + " MPH"

                //humidity
                var currentHumidityEl = document.getElementById("humidity");
                currentHumidityEl.textContent = "Humidity: " + data.current.humidity + " %"

                // uv index
                var uviEl = document.getElementById("uvi");
                uviEl.textContent = "UV Index: " + data.current.uvi 

                console.log(data.daily[0])

                var tempEl = document.getElementById("day1temp");
                tempEl.textContent = "Temp: " + data.daily[0].temp.day + " deg F"

                var windEl = document.getElementById("day1wind");
                windEl.textContent = "Wind: " + data.daily[0].wind_speed + " mph";

                var humidEl = document.getElementById("day1humid");
                humidEl.textContent = "Humidity: " + data.daily[0].humidity + " %"
                })
            })
        });
        let displayWeather = function (getWeather) {

            
        }
    });
};

submitBtn.addEventListener("click", submitBtnHandler)