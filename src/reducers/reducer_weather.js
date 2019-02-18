import { FETCH_CITY,FETCH_WEATHER,FETCH_CURRENT_CITY,LOCAL_WEATHER } from '../actions/index';

const initailState = {
  city: [],
  cityWeather: {},
  fetchImage:[],
  currentCity:[],
  localWeather:{},
  loading:true

}

export default function (state = initailState, action) {
  switch(action.type) {
    case FETCH_CITY: 
    debugger
      return {
        ...state,
        city: [ ...action.payload.data ],
        loading:false,
      }

      case FETCH_CURRENT_CITY:
      debugger
        return {
          ...state,
         
          currentCity: [ ...action.payload.data ],
          loading:false,
        }

      case FETCH_WEATHER:
      debugger
        return {
          ...state,
          cityWeather: action.payload.data,
          loading:action.loading,
        }

        case LOCAL_WEATHER:
          return {
            ...state,
            localWeather: action.payload.data,
            loading:false,
          }
      default:
      return state;
  }

  
}