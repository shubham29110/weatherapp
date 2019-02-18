import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import LoginReducer from './reducer_login';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  login:LoginReducer
});

export default rootReducer;