import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Auth} from 'aws-amplify';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) =>  ({
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
}))


const Navigation = (loggedIn)=>{
   

    const handleClick = (page)=>{
        page = page === 'home' ? '' : page
        window.location.href =  '/' + page
    }
    
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              <Button color="inherit" onClick = {e=>handleClick('home')}> Home </Button>
              <Button color="inherit" onClick = {e=>handleClick('about')}> About Us </Button>
            </Typography>
            <Button color="inherit" onClick = {e=>handleClick('profile')}> Profile </Button>
            <Button color="inherit" onClick = {e=>handleClick('logout')}> Logout </Button>
          </Toolbar>
        </AppBar>

      </div>
    );
}

export default (Navigation);