import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    
  },
});

class CityList extends Component {
  constructor(props) {
    super(props);
      this.classes  = props;
      this.handleClick = this.handleClick.bind(this);
  }

   handleClick=(id)=>{
    this.props.fetchWeather(id)
    console.log(id)
  }
  render(){
    console.log(this.props.city)
    return (
      <div>
      {this.props.city && this.props.city.length <= 0 ? null 
      : this.props.city &&this.props.city.map((dat,i)=>(
        <List component='nav' className={this.classes.root} key={i}>
        <ListItem button >
        <Avatar>
          <ImageIcon />
        </Avatar>
        <ListItemText onClick={()=>{this.handleClick(dat.woeid)}}  primary={dat.title}secondary={dat.latt_long} />
      </ListItem>
    </List>
    
       ))
    }
    </div>
  
    );

  }
 
}



export default withStyles(styles)(CityList);
