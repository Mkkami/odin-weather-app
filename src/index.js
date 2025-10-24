import "./styles.css"
import updateWeatherCard from "./weatherView"
import Weather from "./weatherData";

const form = document.querySelector("form");
const btn = document.querySelector("button");
const input = document.querySelector("input");

const w = new Weather("Warsaw", "Cloudy", "26", "25°C", "75%", "2mm", "5 km/h", "Some desc");

btn.addEventListener('click', (e) => {
    e.preventDefault();
    updateWeatherCard(w.toArray());

})

