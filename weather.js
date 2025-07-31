let City = document.querySelector(".City");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let error = document.querySelector(".error");
let weather = document.querySelector(".weather")

const apikey = "c4b44cdc6e932082e192da508bb9c9e9";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == "404") {
        error.style.display = "block";
        weather.style.display = "none";
    }
    else {
        var data = await response.json();

        console.log(data);

        City.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°c";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/Rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/Drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/Mist.png";
        }

        weather.style.display = "block";
        error.style.display = "none";
    }


}

searchBtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})

// weatherIcon=data.weather[0].main;
//     if(true){
//         weather_icon.src="images/weatherIcon.png"
//     }    