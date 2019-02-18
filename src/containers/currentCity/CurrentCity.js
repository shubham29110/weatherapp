import { connect } from 'react-redux';
import { fetchCurrentCity, localWeather } from '../../actions/index';
import {geolocated} from 'react-geolocated';
import CurrentCity from '../../components/currentCity/CurrentCity'

const mapDispatchToProps = {
  fetchCurrentCity,
  localWeather
}

const mapStateToProps = (state) => ({
  data: state.weather.localWeather,
  currentCity: state.weather.currentCity
 })

 export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(connect(mapStateToProps,mapDispatchToProps)(CurrentCity)) 