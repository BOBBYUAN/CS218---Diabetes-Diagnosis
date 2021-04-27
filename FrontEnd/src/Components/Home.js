import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Copyright from './Copyright';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
    },
}))


export default function Home() {
    const classes = useStyles();
    return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <img src="https://images.creativemarket.com/0.1.0/ps/7720634/600/400/m2/fpnw/wm0/hospital-medical-staff-team-01-.jpg?1581078216&s=e3cf6ff0557336d1ea06cafd06762f28&fmt=webp"></img>

            <Typography component="h1" variant="h5" color='primary' >
                Diabetes is one of the most common diseases in the US. We are facing a healthcare
                crisis, Covid-19, that diabetic people are more vulnerable. Social distancing makes face to face
                appointments with physicians difficult therefore we want to make a simple interface to predict
                diabetes diagnosis.
            </Typography>
        </div>
        <Copyright />
    </Container>
    );
}

