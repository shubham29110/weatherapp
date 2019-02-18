import { connect } from 'react-redux';
import { fetchWeather,fetchCity } from '../../actions/index';
import CityList from '../../components/cityList/CityList'

const mapDispatchToProps = {
  fetchWeather, 
  fetchCity
}

const mapStateToProps = state => ({
 
  city: state.weather.city,
})

export default connect(mapStateToProps,mapDispatchToProps)(CityList)