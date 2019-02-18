import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login/login'
import Home from './containers/home/Home'
import SimpleBottomNavigation from './components/footer/footer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
     {/* < LocationSearchInput /> */}         
          <Router>
            <div>
          <Route exact path="/" component={Login} />
          <Route path="/Home"  component={Home} />
          <SimpleBottomNavigation />  
      </div>
      </Router>
      </div>
    );
  }
}

export default App;
