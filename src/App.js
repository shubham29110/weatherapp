import React, { Component } from 'react';
import './App.css';
import SerachBar from './containers/SearchBar'
import Geoloc from './containers/GeoLocation'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          < SerachBar />
        </header>
        < Geoloc /> 
      </div>
    );
  }
}

export default App;
