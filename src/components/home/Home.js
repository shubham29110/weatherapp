import React, { Component } from 'react';
import SearchBar from '../../containers/search/SearchBar'
import Loading from '../../containers/Loading'
import CityList from '../../containers/cityList/CityList'
import WeatherList from '../../containers/weatherList/WeatherList'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">         
      { this.props.isLoginSuccess ?
       <div>                                   
        <SearchBar />
        <CityList />
        <Loading />
        <WeatherList />                         
      </div>: 
      <div> 
      <Redirect to='/'/>
      </div>
      }
      </div>
    );
  }
}

export default App;
