import { connect } from 'react-redux';
import { fetchWeather } from '../../actions/index';
import WeatherList from '../../components/weatherList/WeatherList'

const mapDispatchToProps = {
  fetchWeather,
  
}

const mapStateToProps = state => ({
  weatherDetails: state.weather.cityWeather,
})

export default connect(mapStateToProps,mapDispatchToProps)(WeatherList)