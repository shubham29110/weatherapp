import { FETCH_CITY,FETCH_WEATHER,FETCH_LOCAL_WEATHER, FETCH_IMAGE } from '../actions/index';

const initailState = {
  city: [],
  cityWeather: {},
  fetchImage:[]
}

export default function (state = initailState, action) {
  switch(action.type) {
    case FETCH_CITY || FETCH_LOCAL_WEATHER:
      return {
        ...state,
        city: [ ...action.payload.data ]
      }
      case FETCH_WEATHER:
        return {
          ...state,
          cityWeather: action.payload.data
        }
        case FETCH_IMAGE:
        return {
          ...state,
          image: action.payload.data
        }
      default:
      return state;
  }

  
}