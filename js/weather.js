// import "../node_modules/dotenv/config.js";

// dotenv.config({ path: ".env" });


// const apiKey = process.env.API_KEY;

const apiKey = "be522005ec5fbe5935c01ed4a28ef8ab";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const weatherIcon = document.querySelector('.weather-icon');
const appCard = document.querySelector('.card');

export async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " mi/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
            appCard.style = "background: linear-gradient(200deg, #ee9f4f, #258701)";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
            appCard.style = "background: linear-gradient(135deg, #00feba, #5b548a)";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
            appCard.style = "background: linear-gradient(175deg, #424645, #6f6e3b, #2d2560)";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
