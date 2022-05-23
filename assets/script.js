var cityInputElement = document.querySelector(".input");
var submitBtn = document.querySelector("#search-btn");
var currentCityElement = document.getElementById("current-city");
var savedCityElement = document.querySelector("#city-list");

// this variable is for the list
var savedCities = [];


getSavedCities();
// this function runs when ths submit button is clicked
var submitBtnHandler = function (event) {
    event.preventDefault();
    // this gets the value, city, from the input
    var currentCity = cityInputElement.value.trim();
    if (currentCity) {
        // this runs the the function, getCity
        getWeather(currentCity);
        cityInputElement.value = "";
        currentCityElement.innerText = currentCity;
    } else {
        // validation
        alert("please enter a city");
    }
}

// this function is going to be used to get latitude and longitude
var getWeather = function (currentCity) {

    // this lets users select a city and create the URL for it
    var weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&units=imperial&appid=15022751718f984d0ffd39a5ca1c8332";

    // this fetch gets the info for the URL above
    fetch(weatherUrl).then(function (response) {
        response.json().then(function (data) {

            var lat = data.coord.lat;
            var lon = data.coord.lon;

            var weatherUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=15022751718f984d0ffd39a5ca1c8332";
            fetch(weatherUrl2).then(function (response) {
                response.json().then(function (data) {
                    
                    var savedCityObject = {
                        city: currentCity,
                    }

                    // this converts to current date
                    var unixTimeStamp = data.current.dt
                    var date = new Date(unixTimeStamp * 1000);
                    var formDate = "Date: " +date.getDate()+
                    "/"+(date.getMonth()+1)+
                    "/"+date.getFullYear()


                    savedCities.push(savedCityObject);
                    localStorage.setItem("savedCities", JSON.stringify(savedCities));

                    // this add the selected city
                    currentCityElement.textContent = currentCity;

                    // this adds the current date
                    var dateElement = document.getElementById("date");
                    dateElement.textContent = formDate;

                    //this works the weather icon
                    var icon = data.current.weather[0].icon;
                    var iconLink = "https://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png";
                    currentCityElement.appendChild(document.createElement("img")).src = iconLink;

                    // this adds the temperature to the site
                    var currentTempElement = document.getElementById("temp");
                    currentTempElement.textContent = "Temperature: " + data.current.temp + " Degrees";

                    // this adds wind speed to the site
                    var currentWindElement = document.getElementById("wind");
                    currentWindElement.textContent = "Wind: " + data.current.wind_speed + " MPH"

                    // this adds humidity to the site
                    var currentHumidityEl = document.getElementById("humidity");
                    currentHumidityEl.textContent = "Humidity: " + data.current.humidity + " %"

                    //this adds the UV index to the site
                    var uviEl = document.getElementById("uvi");

                    // this works teh styling to the css for the UV index
                    uviEl.textContent = "UV Index: " + data.current.uvi
                    if (data.current.uvi > 6) {
                        uviEl.setAttribute("class", "severe");
                    } else if (data.current.uvi === 5) {
                        uviEl.setAttribute("class", "moderate");
                    } else if (data.current.uvi < 5) {
                        uviEl.setAttribute("class", "favorable");
                    }


                    // this controls day 1
                    var icon1 = data.daily[0].weather.icon;
                    var icon1Link = "https://openweathermap.org/img/w/" + data.daily[0].weather[0].icon + ".png";
                    var forecastIcon = document.getElementById("forIcon1");
                    forecastIcon.innerText = "";
                    forecastIcon.appendChild(document.createElement("img")).src = icon1Link;
                    var dateElementOne = document.getElementById("day1date");
                    var formDate1 = "Date: " +(date.getDate()+1)+
                    "/"+(date.getMonth()+1)+
                    "/"+date.getFullYear()
                    dateElementOne.textContent = formDate1;
                    var tempElementOne = document.getElementById("day1temp");
                    tempElementOne.textContent = "Temp: " + data.daily[0].temp.day + " deg F"
                    var windElementOne = document.getElementById("day1wind");
                    windElementOne.textContent = "Wind: " + data.daily[0].wind_speed + " mph";
                    var humidElementOne = document.getElementById("day1humid");
                    humidElementOne.textContent = "Humidity: " + data.daily[0].humidity + " %";

                    // this controls day 2
                    var icon2 = data.daily[1].weather.icon;
                    var icon2Link = "https://openweathermap.org/img/w/" + data.daily[1].weather[0].icon + ".png";
                    var forecastIcon2 = document.getElementById("forIcon2");
                    forecastIcon2.innerText = "";
                    forecastIcon2.appendChild(document.createElement("img")).src = icon2Link;
                    var dateElementTwo = document.getElementById("day2date");
                    var formDate2 = "Date: " +(date.getDate()+2)+
                    "/"+(date.getMonth()+1)+
                    "/"+date.getFullYear()
                    dateElementTwo.textContent = formDate2;
                    var tempElementTwo = document.getElementById("day2temp");
                    tempElementTwo.textContent = "Temp: " + data.daily[1].temp.day + " deg F"
                    var windElementTwo = document.getElementById("day2wind");
                    windElementTwo.textContent = "Wind: " + data.daily[1].wind_speed + " mph";
                    var humidElementTwo = document.getElementById("day2humid");
                    humidElementTwo.textContent = "Humidity: " + data.daily[1].humidity + " %";

                    // this controls day 3
                    var icon3 = data.daily[2].weather.icon;
                    var icon3Link = "https://openweathermap.org/img/w/" + data.daily[2].weather[0].icon + ".png";
                    var forecastIcon3 = document.getElementById("forIcon3");
                    forecastIcon3.innerText = "";
                    forecastIcon3.appendChild(document.createElement("img")).src = icon3Link;
                    var dateElementThree = document.getElementById("day3date");
                    var formDate3 = "Date: " +(date.getDate()+3)+
                    "/"+(date.getMonth()+1)+
                    "/"+date.getFullYear()
                    dateElementThree.textContent = formDate3;
                    var tempElementThree = document.getElementById("day3temp");
                    tempElementThree.textContent = "Temp: " + data.daily[2].temp.day + " deg F"
                    var windElementThree = document.getElementById("day3wind");
                    windElementThree.textContent = "Wind: " + data.daily[2].wind_speed + " mph";
                    var humidElementThree = document.getElementById("day3humid");
                    humidElementThree.textContent = "Humidity: " + data.daily[2].humidity + " %";

                    // this controls day 4
                    var icon4 = data.daily[3].weather.icon;
                    var icon4Link = "https://openweathermap.org/img/w/" + data.daily[3].weather[0].icon + ".png";
                    var forecastIcon4 = document.getElementById("forIcon4");
                    forecastIcon4.innerText = "";
                    forecastIcon4.appendChild(document.createElement("img")).src = icon4Link;
                    var dateElementFour = document.getElementById("day4date");
                    var formDate4 = "Date: " +(date.getDate()+4)+
                    "/"+(date.getMonth()+1)+
                    "/"+date.getFullYear()
                    dateElementFour.textContent = formDate4;
                    var tempElementFour = document.getElementById("day4temp");
                    tempElementFour.textContent = "Temp: " + data.daily[3].temp.day + " deg F"
                    var windElementFour = document.getElementById("day4wind");
                    windElementFour.textContent = "Wind: " + data.daily[3].wind_speed + " mph";
                    var humidElementFour = document.getElementById("day4humid");
                    humidElementFour.textContent = "Humidity: " + data.daily[3].humidity + " %";

                    // this controls day 5
                    var icon5 = data.daily[4].weather.icon;
                    var icon5Link = "https://openweathermap.org/img/w/" + data.daily[4].weather[0].icon + ".png";
                    var forecastIcon5 = document.getElementById("forIcon5");
                    forecastIcon5.innerText = "";
                    forecastIcon5.appendChild(document.createElement("img")).src = icon5Link;
                    var dateElementFive = document.getElementById("day5date");
                    var formDate5 = "Date: " +(date.getDate()+5)+
                    "/"+(date.getMonth()+1)+
                    "/"+date.getFullYear()
                    dateElementFive.textContent = formDate5;
                    var tempElementFive = document.getElementById("day5temp");
                    tempElementFive.textContent = "Temp: " + data.daily[4].temp.day + " deg F"
                    var windElementFive = document.getElementById("day5wind");
                    windElementFive.textContent = "Wind: " + data.daily[4].wind_speed + " mph";
                    var humidElementFive = document.getElementById("day5humid");
                    humidElementFive.textContent = "Humidity: " + data.daily[4].humidity + " %";
                })
            })
        });
    });
};

function getSavedCities() {
    var savedCity = JSON.parse(localStorage.getItem("savedCities"));
    if (savedCity) {
        for (var i = 0; i < savedCity.length; i++) {
            var cityListEl = document.createElement("li");
            var savedCityBtn = document.createElement("btn");

            // this controls the class on the buttons
            savedCityBtn.className = "city-btn";
            savedCityBtn.setAttribute("id", savedCity[i].city);

            // this controls the text on buttons
            savedCityBtn.textContent = savedCity[i].city;

            cityListEl.appendChild(savedCityBtn);
            savedCityElement.appendChild(cityListEl);
            savedCityBtn.addEventListener("click", function(event) {
                console.log("i was clicked", this.id);
                getWeather(this.id);
            })
        }
    }
}



// event listener for the search button for city search 
submitBtn.addEventListener("click", submitBtnHandler);
