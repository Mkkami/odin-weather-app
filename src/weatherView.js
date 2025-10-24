
import humidityImg from './img/humidity.svg';
import windImg from './img/wind.svg';
import rainImg from './img/rain.svg';
import tempImg from './img/thermometer.svg';

let imgArr = [tempImg, humidityImg, rainImg, windImg ];

export default function updateWeatherCard(weather) {
    if (!document.querySelector(".weather")) {
        createWeatherCard();
    }
    setWeatherData(document.querySelector(".weather"), ...weather);
}

function createWeatherCard() {

    const weatherDiv = document.createElement("div")
    weatherDiv.classList.add("weather");

    const informationDiv = document.createElement("div");
    informationDiv.classList.add("information");

    const citySpan = document.createElement("span");
    const skySpan = document.createElement("span");
    citySpan.id = "city";
    skySpan.id = "sky";

    informationDiv.appendChild(citySpan);
    informationDiv.appendChild(skySpan);

    const tempSpan = document.createElement("span");
    tempSpan.classList.add("temperature", "center-box");


    const moreDiv = document.createElement("div");
    moreDiv.classList.add("more");
    
    for (let i = 0; i < 4; i++) {
        let elem = document.createElement("span");
        elem.classList.add("center-box");

        let img = document.createElement("img");
        img.src = imgArr[i];

        let valueSpan = document.createElement("span");

        elem.appendChild(img);
        elem.appendChild(valueSpan);
        moreDiv.appendChild(elem);
    }

    const descTxt = document.createElement("p");
    descTxt.classList.add("description", "center-box");

    weatherDiv.appendChild(informationDiv);
    weatherDiv.appendChild(tempSpan);
    weatherDiv.appendChild(moreDiv);
    weatherDiv.appendChild(descTxt);

    const main = document.querySelector("main");

    main.appendChild(weatherDiv);

    return weatherDiv;
}

function setWeatherData(weatherDiv, city, sky, temp, more, description) {
    const citySpan = weatherDiv.querySelector('#city');
    const skySpan = weatherDiv.querySelector('#sky');
    const tempSpan = weatherDiv.querySelector('.temperature');
    const moreDiv = weatherDiv.querySelector('.more');
    const descTxt = weatherDiv.querySelector('.description');

    if (tempSpan) tempSpan.textContent = temp;
    if (citySpan) citySpan.textContent = city;
    if (skySpan) skySpan.textContent = sky;
    if (descTxt) descTxt.textContent = description;

    const elems = moreDiv.querySelectorAll('.center-box');
    for (let i = 0; i < 4; i++) {
        const valueSpan = elems[i].querySelector('span');
        console.log(more[i]);
        valueSpan.textContent = more[i];
    }
}