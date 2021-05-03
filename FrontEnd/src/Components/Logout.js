//SJSU CS 218 Spring 2021 TEAM3
import React from 'react'
import {Auth} from 'aws-amplify';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Copyright from './Copyright';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
}))
const Logout = ()=>{
    Auth.signOut()
    const classes = useStyles()
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Logged out
                </Typography>
            </div>
            <Copyright />
        </Container>
    )
}

export default Logout
