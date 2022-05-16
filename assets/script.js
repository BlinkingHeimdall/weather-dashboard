let cityInput = document.querySelector('.input');
let submitBtn = document.querySelector('#search');

let submitBtnHandler = function(event) {
    event.preventDefault();
    
    let currentCity = cityInputEl.value.trim();

    if (currentCity) {
        getCity(currentCity);
        cityInputEl.value = "";
    }
    else
    {
        alert("Please Enter a City");
    }
}

let getCity = function(currentCity) {
    let apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&units=imperialappid=15022751718f984d0ffd39a5ca1c8332";
    fetch(apiURL).then(function(response) {
        response.json().then(function(data) {
            console.log(data.coord.lat);
            console.log(data.coord.lon);
            let lat = data.coord.lat;
            let lon = data.coord.lon;

            let apiURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=15022751718f984d0ffd39a5ca1c8332";

            fetch(apiURL2).then(function(response) {
                response.json().then(function(data) {
                    console.log(data);
                console.log(data.current.temp);
                console.log(data.current.wind_speed);
                console.log(data.current.humidity);
                console.log(data.current.uvi);
                })
            })
        });
    });
};

submitBtn.addEventListener("click", submitBtnHandler)