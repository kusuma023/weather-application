var searchBtn = document.querySelector(".search-icon");
var searchbar = document.getElementById("search-bar");
searchBtn.addEventListener('click', ()=>{
    getReport(searchbar.value)
});

async function getReport(city){
    const url = "https://api.openweathermap.org/data/2.5/weather?&appid=874f252b3f7049c0143b100889c2150c&units=metric";
    var data = await fetch(url+`&q=${city}`)
    if(data.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var result = await data.json();

        document.querySelector(".temp").innerText = result.name;
        document.querySelector(".loc").innerText = Math.round(result.main.temp) + "°c";
        document.querySelector(".humidity").innerText = result.main.humidity + "%";
        document.querySelector(".wind-speed").innerText = result.wind.speed + "km/h";

        var weatherIcon = document.querySelector(".weather-logo img");
        if(result.weather[0].main == "Rain"){
            weatherIcon.src="./images/rain.png";
        }
        else if(result.weather[0].main == "Clear"){
            weatherIcon.src="./images/sun.png";
        }
        else if(result.weather[0].main == "Clouds"){
            weatherIcon.src="./images/cloud.png";
        }
        else if(result.weather[0].main == "Drizzle"){
            weatherIcon.src="./images/drizzle.png";
        }
        else{
            weatherIcon.src="./images/mist.png";
        }
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
}