const apiKey = "8bce3dfa224b828d214f42fa8c08110d";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBar = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon");
// asynchronous function response is fetching an API URL 
// 
async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);


    // display error, hide weather information
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        // display information

        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
    
        } 
        else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
    
        } 
        else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
    
        } 
        else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
    
        } 
        else if (data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
    
        }
        
        // display weather
        document.querySelector(".weather").style.display = "block";
        // hide error
        document.querySelector(".error").style.display = "none";

    }

    

    console.log(weatherIcon);

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBar.value);
})
