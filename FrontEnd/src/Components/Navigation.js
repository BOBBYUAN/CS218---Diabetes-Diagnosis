import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class Navigation extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        }
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick(page){
        page = page === 'home' ? '' : page
        window.location.href =  '/' + page
    }




  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <Button color="inherit" onClick = {e=>this.handleClick('home')}> Home </Button>
              <Button color="inherit" onClick = {e=>this.handleClick('about')}> About Us </Button>
            </Typography>
            <Button color="inherit" onClick = {e=>this.handleClick('profile')}> Profile </Button>
            <Button color="inherit" onClick = {e=>this.handleClick('signup')}> SignUp </Button>
            <Button color="inherit" onClick = {e=>this.handleClick('home')}>Logout</Button>
          </Toolbar>
        </AppBar>

      </div>
    );
  }
}

export default withStyles(styles)(Navigation);