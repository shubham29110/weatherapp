import React,{Component} from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import CustomizedTable from './weather_list'


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class Lister extends Component {
  constructor(props) {
    super(props);
      this.classes  = props;
     // this.data = props;
      this.handleClick = this.handleClick.bind(this);
  }

  //const { classes, data } = props;

   handleClick=(id)=>{
    this.props.fetchWeather(id)
    console.log(id)
  }
  render(){
    return (
      <div>
      {this.props.cityDetails && this.props.cityDetails.length <= 0 ?'No data yet' 
      : this.props.cityDetails &&this.props.cityDetails.map((dat,i)=>(
        <List className={this.classes.root} key={i}>
        <ListItem >
        <Avatar>
          <ImageIcon />
        </Avatar>
        <ListItemText onClick={()=>this.handleClick(dat.woeid)}  primary={dat.title}secondary={dat.latt_long} />
      </ListItem>
    </List>
    
       ))
    }
  < CustomizedTable weatherDetails={this.props.data} />
    </div>
  
    );

  }
 
}

const mapDispatchToProps = {
  fetchWeather,
}

const mapStateToProps = state => ({
  data: state.weather.cityWeather
})

export default connect(mapStateToProps,mapDispatchToProps)(Lister,withStyles(styles));
