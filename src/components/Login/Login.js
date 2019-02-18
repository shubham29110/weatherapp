import React from 'react';
import {callLoginApi} from '../../helper/index'
import { Paper, withStyles, Grid, TextField, Button } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography';
import {  Redirect } from "react-router-dom";
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

class LoginTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
  }

  login = (email, password) => {
  
   this.props.setLoginSuccess(false);
    callLoginApi(email, password, error => {
      this.props.setLoginPending(false);
      if (!error) {
        this.props.setLoginSuccess(true);
      } else {
        this.props.setLoginError(error);
      }
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
     this.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }



    render() {
        const { classes } = this.props;
        let { email, password } = this.state;
        let {isLoginPending, isLoginSuccess, loginError} = this.props;
        return (
          <form onSubmit={this.onSubmit}>
            <Paper className={classes.padding}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="username" type="email"  value={email} onChange={e => this.setState({email: e.target.value})} fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Password" type="password" value={password} onChange={e => this.setState({password: e.target.value})} fullWidth required />
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button type = 'submit' variant="outlined" color="primary" style={{ textTransform: "none" }}>Login</Button>
                    </Grid>
                </div>
                <div className="message">
                 
              </div>
            </Paper>

            <Typography component="p">
                    { isLoginPending && <div>Please wait...</div> }
                    { isLoginSuccess && <div>
                        Success.
                        <div>
                        <Redirect to='/Home'/>
                        </div>
                        
                        </div> }
                    { loginError && <div>{loginError.message}</div> }
            </Typography>
            </form>
        );
    }
}

export default withStyles(styles)(LoginTab);