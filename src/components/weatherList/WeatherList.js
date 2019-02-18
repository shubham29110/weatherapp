import React,{Component} from 'react';
import * as moment from 'moment'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width:'100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    whiteSpace: 'nowrap',
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 30,
    height: 30,
  },
});



class WeatherList extends Component {
  constructor(props) {
    super(props);
    this.classes  = props;
    

  }
render(){
  const { weatherDetails: { consolidated_weather = [],parent,title } } = this.props;
  if(Object.keys(this.props.weatherDetails).length){
  console.log('parent',title)
}
var date=moment(moment().format('YYYY-MM-DD')).add('days', 4)
      
    
  
    return (
      <div name='weatherList'>
      
      <Paper className={this.classes.root}>
        <Table style={{ tableLayout: 'fixed' }} className={this.classes.table}>
          {this.props.weatherDetails.hasOwnProperty("title")&&
          <TableHead>
            <TableRow>
              <CustomTableCell>{title},{parent.title}</CustomTableCell>
              <CustomTableCell align="right">Temprature</CustomTableCell>
              <CustomTableCell align="right">Maximum</CustomTableCell>
              <CustomTableCell align="right">Minimum</CustomTableCell>
              <CustomTableCell align="right">Humidity</CustomTableCell>
              <CustomTableCell align="right">Visibility</CustomTableCell>
              <CustomTableCell align="right">Date</CustomTableCell>
            </TableRow>
          </TableHead>
          }
          {consolidated_weather.map(data => (
          <TableBody>
              { data.applicable_date <= moment(date._d).format('YYYY-MM-DD') &&  
              <TableRow className={this.classes.row} key={data.id}>
                <CustomTableCell component="th" scope="row">
                {data.weather_state_name}
                </CustomTableCell>
                <CustomTableCell align="right">{Math.round((data.the_temp))}°C </CustomTableCell>
                <CustomTableCell align="right">{Math.round(data.max_temp)}°C </CustomTableCell>
                <CustomTableCell align="right">{Math.round(data.min_temp)}°C </CustomTableCell>
                <CustomTableCell align="right">{data.humidity}</CustomTableCell>
                <CustomTableCell align="right">{Math.round(data.visibility)} km/h</CustomTableCell>
                <CustomTableCell align="right" >
                      <Grid container justify="center" alignItems="center">
                          <Avatar alt="Weather Image" src={`https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`}
                          className={this.classes.avatar} />
                      </Grid>
                      {moment(data.applicable_date).format('DD-MM-YYYY')} 
                </CustomTableCell>
              </TableRow>
            
              }
          </TableBody>
          ))}
        </Table>
      </Paper>
      </div>
    );

}

}


export default withStyles(styles)(WeatherList)