import "./styles.css"
import updateWeatherCard from "./weatherView"
import Weather from "./weatherData";

const form = document.querySelector("form");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const errorMessage = document.querySelector(".error-message");

let w = new Weather();
let city = "";

btn.addEventListener('click', async (e) =>  {
    e.preventDefault();
    let formdata = new FormData(form);
    city = formdata.get('city');
    console.log(city);
    await fetchWeather(city);

    form.reset();
})

async function fetchWeather(city) {

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&elements=datetime%2Ctemp%2Cfeelslike%2Chumidity%2Cprecip%2Cwindspeed%2Ccloudcover%2Cconditions%2Cdescription&include=days&key=6KQ4ZLT6YFWN45FZM72H2GFK2&contentType=json`)
    if (response.status == 400) {
        displayError(true, "Enter correct city");
        return;
    } else if (!response.ok) {
        displayError(true, "Server error");
        return;
    }
    
    const data = await response.json();
    console.log(data);
    console.log(data.days[0])
    updateWeather(data);
    displayError(false);
    updateWeatherCard(w.toArray());
}

function updateWeather(data) {
    const day = data.days[0];
    w = new Weather(
        data.resolvedAddress,
        day.conditions,
        day.temp,
        day.feelslike,
        day.humidity,
        day.precip,
        day.windspeed,
        day.description
    );
    console.log(w);
}

function displayError(state, message="") {
    if (state) {
        errorMessage.textContent = message;
    }
    errorMessage.dataset.visible = state ? "true" : "false";
}