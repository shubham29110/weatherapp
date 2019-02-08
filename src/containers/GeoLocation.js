import React from 'react';
import { connect } from 'react-redux';
import {geolocated} from 'react-geolocated';
import { fetchLocal } from '../actions/index';
 
class Geoloc extends React.Component {  
  render() {
    debugger
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
        
          ? 
          (() => {
            if (this.props.coords.latitude && this.props.coords.longitude) {
              this.props.fetchLocal(this.props.coords.latitude,this.props.coords.longitude)
              console.log(this.props.data)
            }
         })() &&
         <table>
            <tbody >
              <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
              <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
            </tbody>
          </table>
          : <div>Getting the location data&hellip; </div>; 
  }
}

const mapDispatchToProps = {
  fetchLocal,
}

const mapStateToProps = (state) => ({
  data: state.weather.city,
 })
 
export default connect(mapStateToProps,mapDispatchToProps) (geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
}),Geoloc);