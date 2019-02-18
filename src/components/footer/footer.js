import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';



const styles = {
  root: {
    width: '100%',
    'backgroundColor':'#D3D3D3',
    'margin-top':20

  },
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div name='footer'>
      <BottomNavigation style={{'textAlign': 'justify'}}
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
      <p >Made with ♥ by Team</p>
      </BottomNavigation>
     
      </div>
    );
  }
}



export default withStyles(styles)(SimpleBottomNavigation);