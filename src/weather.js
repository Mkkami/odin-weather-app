
import humidityImg from './img/humidity.svg';
import windImg from './img/wind.svg';
import rainImg from './img/rain.svg';
import tempImg from './img/thermometer.svg';

let imgArr = [tempImg, humidityImg, rainImg, windImg ];

export function createWeatherCard(city, sky, temp, more, description) {

    const weatherDiv = document.createElement("div")
    weatherDiv.classList.add("weather");

    const informationDiv = document.createElement("div");
    informationDiv.classList.add("information");

    const citySpan = document.createElement("span");
    const skySpan = document.createElement("span");
    citySpan.id = "city";
    skySpan.id = "sky";

    citySpan.textContent = city;
    skySpan.textContent = sky;

    informationDiv.appendChild(citySpan);
    informationDiv.appendChild(skySpan);

    const tempSpan = document.createElement("span");
    tempSpan.classList.add("temperature", "center-box");
    tempSpan.textContent = `${temp}°C`

    const moreDiv = document.createElement("div");
    moreDiv.classList.add("more");

    
    
    for (let i = 0; i < 4; i++) {
        let elem = document.createElement("span");
        elem.classList.add("center-box");
        let img = document.createElement("img");
        img.src = imgArr[i];
        elem.innerHTML = `<img src="${imgArr[i]}" alt=""> ${more[i]}`;
        moreDiv.appendChild(elem);
    }
    const descTxt = document.createElement("p");
    descTxt.classList.add("description", "center-box");
    descTxt.textContent = description;

    weatherDiv.appendChild(informationDiv);
    weatherDiv.appendChild(tempSpan);
    weatherDiv.appendChild(moreDiv);
    weatherDiv.appendChild(descTxt);

    const main = document.querySelector("main");

    main.appendChild(weatherDiv);

    return weatherDiv;
}