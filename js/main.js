import * as weather from "../js/weather.js"

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
searchBtn.addEventListener("click", () => {
    weather.checkWeather(searchBox.value);
})