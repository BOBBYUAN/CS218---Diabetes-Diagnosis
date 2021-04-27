import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Copyright from './Copyright';


import { makeStyles } from '@material-ui/core/styles';
function Signature() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            Sihan He, Huy Nguyen, and Yuan Wangcheng. 
        </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
}));

export default function About() {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5" align='center' color='primary'>
                    We are Team 3 CS 218 Spring 2021
                </Typography>
            </div>
            <Box mt={8}>
                <Signature />
            </Box>
            <Copyright/>
        </Container>
        
    )
}

