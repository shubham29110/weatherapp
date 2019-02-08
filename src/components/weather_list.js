import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});



class CustomizedTable extends Component {
  constructor(props) {
    super(props);
    this.classes  = props;

  }
render(){
  const { weatherDetails: { consolidated_weather = [] } } = this.props;

  console.log(consolidated_weather)
    return (
      <Paper className={this.classes.root}>
        <Table className={this.classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Ambieance</CustomTableCell>
              <CustomTableCell align="right">Temprature</CustomTableCell>
              <CustomTableCell align="right">Maximum</CustomTableCell>
              <CustomTableCell align="right">Minimum</CustomTableCell>
              <CustomTableCell align="right">Humidity</CustomTableCell>
              <CustomTableCell align="right">Visibility</CustomTableCell>
              <CustomTableCell align="right">weather_state_abbr</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {consolidated_weather.map(data => (
              <TableRow className={this.classes.row} key={data.id}>
                <CustomTableCell component="th" scope="row">
                  {data.weather_state_name}
                </CustomTableCell>
                <CustomTableCell align="right">{data.the_temp}</CustomTableCell>
                <CustomTableCell align="right">{data.max_temp}</CustomTableCell>
                <CustomTableCell align="right">{data.min_temp}</CustomTableCell>
                <CustomTableCell align="right">{data.humidity}</CustomTableCell>
                <CustomTableCell align="right">{data.visibility}</CustomTableCell>
                <CustomTableCell align="right">{data.weather_state_abbr}.svg</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );

}

}


export default withStyles(styles)(CustomizedTable);