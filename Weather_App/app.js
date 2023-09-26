const apikey = "05bb3fc57315f9cfcb7686ce3d91598c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){

    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    if (data.cod == "404")
    {
        document.querySelector(".error").style.display = "block";
    }

    if (data.main.name != "undefined")
    {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        const exp = data.weather[0].main;
        console.log(exp);
    
        switch(exp)
        {
            case "Clouds":
                weatherIcon.src = "images/clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png";
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "images/mist.png";
                break;
            default:
                weatherIcon.src = "images/wind.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value); 
})

document.addEventListener("keypress", function(event){
    if (event.key == "Enter"){
        searchBtn.click();
    }
});

checkWeather();