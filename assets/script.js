let cityInput = document.querySelector('.input');
let submitBtn = document.querySelector('#search');

let submitBtnHandler = function(event) {
    event.preventDefault();
    
    let currentCity = cityInputEl.value.trim();

    if (currentCity) {
        getWeather(currentCity);
        cityInputEl.value="";
    }
    else
    {
        alert("Please Enter a City");
    }
}

let getWeather = function(currentCity) {
    let apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&appid=15022751718f984d0ffd39a5ca1c8332";
    fetch(apiURL).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

submitBtn.addEventListener("click", submitBtnHandler)