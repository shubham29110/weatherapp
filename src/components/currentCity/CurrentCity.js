import React from 'react';
import * as moment from 'moment'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  card: {
    maxWidth: 200,
    whiteSpace: 'nowrap',
    display: "inline-block"
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 30,
    height: 30,
  },
};




 
class Geoloc extends React.Component { 
  constructor(props) {
    super(props);
    this.classes  = props;

  }

  async componentWillReceiveProps(nextProps) {
    
    
    if(this.props.coords !== nextProps.coords){
      
      await this.props.fetchCurrentCity(nextProps.coords.latitude, nextProps.coords.longitude)
    }
    if(this.props.currentCity.length){
      
      const woeid = this.props.currentCity[0].woeid
      this.props.localWeather(woeid)
    }

    
  }

  render() {
    const {data:{  consolidated_weather = []} ,classes} = this.props
    var date=moment(moment().format('YYYY-MM-DD')).add('days', 4)

    return(
      <div > 
      {consolidated_weather.map(data => (
        <div style={{ display: "inline-block" }}>
        { data.applicable_date <= moment(date._d).format('YYYY-MM-DD') &&  
          <div key={data.id} >
            <Card className={classes.card} align='right'>
                <CardContent >
                <Avatar alt="Weather Image" src={`https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`}
                  className={this.classes.bigAvatar} />
                  <Typography component="p">
                  {moment(data.applicable_date).format('DD-MM-YYYY')} 
                  </Typography> 
                  <Typography gutterBottom variant="h5" component="h6">
                {data.weather_state_name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                  {Math.round((data.the_temp))}°C 
                  </Typography>
                  <Typography component="p">
                  Max:{Math.round(data.max_temp)}°C  Min:{Math.round(data.min_temp)}°C 
                  </Typography>
                </CardContent>
         
          
        </Card>
        </div>}</div>
          ))}
    </div>
    )
}
}




 
 export default (withStyles(styles)(Geoloc))
