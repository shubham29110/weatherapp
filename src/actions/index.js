import axios from 'axios';

const ROOT_URL = `https://www.metaweather.com/api/location/`;

export const FETCH_CITY = 'FETCH_CITY';
export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_CURRENT_CITY = 'FETCH_CURRENT_CITY';
export const LOCAL_WEATHER = 'LOCAL_WEATHER'

export async function fetchCity(city) {
  const url = `${ROOT_URL}search/?query=${city}`;
  const request = await axios.get(url);
  
  return {
    type: FETCH_CITY,
    payload: request
  };
}

export async function fetchCurrentCity(latt,long) {
  const url = `${ROOT_URL}search/?lattlong=${latt},${long}`;
  const request = await axios.get(url);
  
  return {
    type: FETCH_CURRENT_CITY,
    payload: request
  };
}

export async function fetchWeather(woeid) {
  
  const url = `${ROOT_URL}${woeid}`;
  const request = await axios.get(url);
  debugger
  return {
    type: FETCH_WEATHER,
    payload: request,
    loading:true
  };
}

export async function localWeather(woeid) {
  
  const url = `${ROOT_URL}${woeid} `;
  const request = await axios.get(url);
  
  return {
    type: LOCAL_WEATHER,
    payload: request
  };
}
