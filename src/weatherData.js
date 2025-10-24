export default class Weather {
    constructor(city, sky, temp, tempFeels, humid, rain, wind, desc) {
        this.city = city;
        this.sky = sky;
        this.temp = temp;
        this.tempFeels = tempFeels;
        this.humidity = humid;
        this.rain = rain;
        this.wind = wind;
        this.desc = desc;
    }

    getMore() {
        return [this.tempFeels, this.humidity, this.rain, this.wind]
    }

    toArray() {
        return [this.city, this.sky, this.temp, this.getMore(), this.desc];
    }
}