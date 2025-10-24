export default class Weather {
    constructor(city, sky, temp, tempFeels, humid, rain, wind, desc) {
        this.city = city ? city.charAt(0).toUpperCase() + city.slice(1) : city;
        this.sky = sky;
        this.temp = `${temp}°C`;
        this.tempFeels = `${tempFeels}°C`;
        this.humidity = `${humid}%`;
        this.rain = `${rain} mm`;
        this.wind = `${wind} km/h`;
        this.desc = desc;
    }

    getMore() {
        return [this.tempFeels, this.humidity, this.rain, this.wind]
    }

    toArray() {
        return [this.city, this.sky, this.temp, this.getMore(), this.desc];
    }
}