import { connect } from 'react-redux';
import SearchBar from '../../components/search/SearchBar'
import { fetchCity } from '../../actions/index';

const mapDispatchToProps = {
  fetchCity,
}

const mapStateToProps = (state) => ({
 data: state.weather.city,
 loading: state.weather.loading
})

export default  connect(mapStateToProps,mapDispatchToProps)(SearchBar)