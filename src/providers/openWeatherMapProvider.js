const fetch = require('node-fetch');
const API_KEY = process.env.WM_API_KEY || 'b1b15e88fa797225412429c1c50c122a1';
const URL = process.env.ENV_MODE == 'TEST' ?
    'http://samples.openweathermap.org/data/2.5/weather' :
    'http://api.openweathermap.org/data/2.5/weather';

const provider = {

    getByCityName: (cityName) => {
        return fetch(`${URL}?q=${cityName}&appid=${API_KEY}`);
    },

    getByCityId: (cityId) => {
        return fetch(`${URL}?id=${cityId}&appid=${API_KEY}`);
    },

    getByLatLong: (lat, lon) => {
        return fetch(`${URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    },

    getByZipCodeAndCountryCode: (zipCode, countryCode) => {
        return fetch(`${URL}?zip=${zipCode},${countryCode}&appid=${API_KEY}`);
    }

};


module.exports = provider;