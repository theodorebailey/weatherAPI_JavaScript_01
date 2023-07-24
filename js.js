// api key is key provided by open weather 
const apiKey = "8bce3dfa224b828d214f42fa8c08110d";
// api url is url plus eventually additional user inputs, additional required text + api key above
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// searchBar equals query selector class search input 
const searchBar = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon");
// asynchronous function response is fetching an API URL 
// 
async function checkWeather(city) {

    // response = await fetch response of combination of URL + city + apiKey to create url to access API data
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    // if response.status == 404
    if (response.status == 404) {

        // display error
        document.querySelector(".error").style.display = "block";
        // hide weather
        document.querySelector(".weather").style.display = "none";

    } else {

        // display information
        var data = await response.json();

        // log data to console for understanding purposes
        // console.log(data);
        // console.log(data.coord.lon);
        // console.log(data.coord.lat);
        // console.log("data name",data.name);
        // console.log("data main temp",data.main.temp);
        // console.log("data main humidity",data.main.humidity);
        // console.log("data wind speed",data.wind.speed);
        // console.log("data", data.weather)
        // console.log("data", data);

        // select city class inner text = data.name
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".long").innerHTML = data.coord.lon + " λ";
        document.querySelector(".lat").innerHTML = data.coord.lat + " φ";

        // if data.weather at array position 1 .main == Clouds, weatherIcon src is clouds image
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"
    
        } 
        // if data.weather at array position 1 .main == Clouds, weatherIcon src is clear image
        else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
    
        } 
        // etc
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

    
    // log weatherIcon to console
    // console.log(weatherIcon);

}

// search button, add event listener, click event which executes checkWeather function using value in text field of searchBar contained in value property
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBar.value);
})
