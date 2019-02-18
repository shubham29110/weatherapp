import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CurrentCity from '../../containers/currentCity/CurrentCity'

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

class SearchBar extends Component {
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
console.log('search',this.props.data)
    return (
      <div className="SearchBar">
      <form onSubmit={ this.onFormSubmit } className="input-group">
      <Paper style={{'marginBottom': '10px'}}className={this.classes.root} elevation={1}>

        <InputBase disabled={this.props.loading} className={this.classes.input} 
        placeholder="Search City Weather "
        value={ this.state.term }
        onChange={ this.onInputChange } />
        <IconButton className={this.classes.iconButton} aria-label="Search">
          <SearchIcon />
        </IconButton>
      </Paper>
      </form>
      < CurrentCity />
      
      </div>
     
    );
  } 
  
}



export default withStyles(styles)(SearchBar)