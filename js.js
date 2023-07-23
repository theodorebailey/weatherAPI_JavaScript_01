const apiKey = "8bce3dfa224b828d214f42fa8c08110d";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=london";

async function checkWeather() {
    const response = await fetch(apiURL + `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

checkWeather();