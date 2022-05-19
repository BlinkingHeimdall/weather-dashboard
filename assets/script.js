var cityInput = document.querySelector('.input');
var submitBtn = document.querySelector('#search');
var currentCityEl = document.querySelector("current-city")

var submitBtnHandler = function(event) {
    event.preventDefault();
    
    var currentCity = cityInputEl.value.trim();

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

var getWeather = function(currentCity) {
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&units=imperialappid=15022751718f984d0ffd39a5ca1c8332";
    fetch(apiURL).then(function(response) {
        response.json().then(function(data) {

            var lat = data.coord.lat;
            var lon = data.coord.lon;

            var apiURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=15022751718f984d0ffd39a5ca1c8332";

            fetch(apiURL2).then(function(response) {
                response.json().then(function(data) {
                    // weather icon
                var icon= data.current.weather[0].icon;
                var iconLink = "https://openweathermap.org/img/w/" + icon + ".png";
                console.log(iconLink);

                var tempElOne = document.getElementById("day1temp");
                tempElOne.textContent = "Temp: " + data.daily[0].temp.day + " deg F"

                var windElOne = document.getElementById("day1wind");
                windElOne.textContent = "Wind: " + data.daily[0].wind_speed + " mph";

                var humidElOne = document.getElementById("day1humid");
                humidElOne.textContent = "Humidity: " + data.daily[0].humidity + " %";

                // display day 2
                var tempElTwo = document.getElementById("day2temp");
                tempElTwo.textContent = "Temp: " + data.daily[1].temp.day + " deg F"

                var windElTwo = document.getElementById("day2wind");
                windElTwo.textContent = "Wind: " + data.daily[1].wind_speed + " mph";

                var humidElTwo = document.getElementById("day2humid");
                humidElTwo.textContent = "Humidity: " + data.daily[1].humidity + " %";

                //display day 3
                var tempElThree = document.getElementById("day3temp");
                tempElThree.textContent = "Temp: " + data.daily[2].temp.day + " deg F"

                var windElThree = document.getElementById("day3wind");
                windElThree.textContent = "Wind: " + data.daily[2].wind_speed + " mph";

                var humidElThree = document.getElementById("day3humid");
                humidElThree.textContent = "Humidity: " + data.daily[2].humidity + " %";

                // display day 4
                var tempElFour = document.getElementById("day4temp");
                tempElFour.textContent = "Temp: " + data.daily[3].temp.day + " deg F"

                var windElFour = document.getElementById("day4wind");
                windElFour.textContent = "Wind: " + data.daily[3].wind_speed + " mph";

                var humidElFour = document.getElementById("day4humid");
                humidElFour.textContent = "Humidity: " + data.daily[3].humidity + " %";
                })
            })
        });
        var displayWeather = function (getWeather) {


        }
    });
};

submitBtn.addEventListener("click", submitBtnHandler)