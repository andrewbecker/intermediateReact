import axios from 'axios';

const API_KEY = 'd886e501532a8778eaeca47dcb3f50b3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
