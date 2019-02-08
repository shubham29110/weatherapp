import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCity } from '../actions/index';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Lister from '../components/List'

const styles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

class SerachBar extends Component {
  constructor(props) {
    super(props);
      this.classes  = props;
      this.state = { term: '' };
      this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);

  }
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.fetchCity(this.state.term);
    this.setState({ term: '' });
  }

  render(){
console.log(this.props.data)
    return (
      <div className="SearchBar">
      <form onSubmit={ this.onFormSubmit } className="input-group">
      <Paper className={this.classes.root} elevation={1}>
        <IconButton className={this.classes.iconButton} aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <InputBase className={this.classes.input} 
        placeholder="Search City Weather "
        value={ this.state.term }
        onChange={ this.onInputChange } />
        <IconButton className={this.classes.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>
      </form>
      < Lister cityDetails={this.props.data} />
      </div>
    );
  } 
  
}

const mapDispatchToProps = {
  fetchCity,
}

const mapStateToProps = (state) => ({
 data: state.weather.city,
})

export default  connect(mapStateToProps,mapDispatchToProps)(SerachBar,withStyles(styles))