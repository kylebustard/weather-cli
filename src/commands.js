require('dotenv').config()
const APIXU_KEY = process.env.APIXU_KEY
const fetch = require('node-fetch');

const fetchNow = async (city) => {
  const response = await fetch(`https://api.apixu.com/v1/current.json?key=${APIXU_KEY}&q=${city}`);
  const data = await response.json();
  const { name, region, country, lat, lon } = data.location;
  const weather = data.current;

  const current = {
    location: name,
    region: region,
    country: country,
    latitude: lat,
    longitude: lon,
    temperature: weather.temp_f,
    humidity: weather.humidity,
    temp_feelslike_f: weather.feelslike_f,
    condition: weather.condition.text
  };

  console.log(current);
}

const weatherForecast = async (city) => {
  const response = await fetch(`https://api.apixu.com/v1/forecast.json?key=${APIXU_KEY}&q=${city}`);

  const data = await response.json();
  const { date, date_epoch, day, astro } = data.forecast.forecastday[0];

  const forecast = {
    date: date,
    day: day,
    astro: astro
  }

  console.log(forecast)
};

module.exports = { fetchNow, weatherForecast };