import axios from 'axios';

const ROOT_URL = `https://www.metaweather.com/api/location/`;
const IMAGE_URL = `https://www.metaweather.com/static/img/weather/s.svg`;

export const FETCH_CITY = 'FETCH_CITY';
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_LOCAL_WEATHER = 'FETCH_LOCAL_WEATHER';
export const FETCH_IMAGE = 'FETCH_IMAGE';

export async function fetchCity(city) {
  const url = `${ROOT_URL}search/?query=${city}`;
  const request = await axios.get(url);
  return {
    type: FETCH_CITY,
    payload: request
  };
}

export async function fetchLocal(latt,long) {
  const url = `${ROOT_URL}search/lattlong=${latt},${long}`;
  const request = await axios.get(url);
  return {
    type: FETCH_LOCAL_WEATHER,
    payload: request
  };
}

export async function fetchWeather(woeid) {
  const url = `${ROOT_URL}${woeid}`;
  const request = await axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export async function fetchImage(abbr) {
  const url = `${IMAGE_URL}${abbr}.svg`;
  const request = await axios.get(url);
  return {
    type: FETCH_IMAGE,
    payload: request
  };
}