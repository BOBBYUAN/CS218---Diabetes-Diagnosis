import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Copyright from './Copyright';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Profile() {
    const classes = useStyles();

    const [selectedDate, setSelectedDate] = React.useState(new Date('1995-07-01T21:11:54'));
    const [gender, setGender] = React.useState('female'); 
    const [polyuria, setPolyuria] = React.useState(0); 
    const [polydipsia, setPolydipsia] = React.useState(0); 
    const [weight_loss, setWeightLoss] = React.useState(0); 
    const [weakness, setWeakness] = React.useState(0); 
    const [polyphagia, setPolyphagia] = React.useState(0); 
    const [thrush, setThrush] = React.useState(0); 
    const [visual, setVisual] = React.useState(0); 
    const [itching, setItching] = React.useState(0); 

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleGenderChange = (event) => {
        const gender = event.target.value
        setGender(gender);
    };

    const handlePolyuriaChange = (event) => {
        const value = event.target.value
        setPolyuria(value);
    };

    const handlePolydipsiaChange = (event) => {
        const value = event.target.value
        setPolydipsia(value);
    };

    const handleWeightChange = (event) => {
        const value = event.target.value
        setWeightLoss(value);
    };

    const handleWeaknessChange = (event) => {
        const value = event.target.value
        setWeakness(value);
    };

    const handlePolyphagiaChange = (event) => {
        const value = event.target.value
        setPolyphagia(value);
    };

    const handleThrushChange = (event) => {
        const value = event.target.value
        setThrush(value);
    };

    const handleVisualChange = (event) => {
        const value = event.target.value
        setVisual(value);
    };

    const handleItchingChange = (event) => {
        const value = event.target.value
        setItching(value);
    };
    
    return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LocalHospitalOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Personal Information
            </Typography>
            <form className={classes.form} noValidate>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="dob"
                    label="Date of Birth"
                    value={selectedDate}
                    onChange={handleDateChange}
                    fullWidth
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                    />  
                </MuiPickersUtilsProvider>
                <br/>
                <br/>

                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={handleGenderChange}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>
                <br/>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Polyuria (Produce a large volume of urine)</FormLabel>
                    <RadioGroup aria-label="polyuria" name="polyuria" value={polyuria} onChange={handlePolyuriaChange}>
                        <FormControlLabel value="1" control={<Radio />} label="Yes" />
                        <FormControlLabel value="0" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <br/>

                <FormControl component="fieldset">
                    <FormLabel component="legend">Polydipsia (Excess thirst)</FormLabel>
                    <RadioGroup aria-label="polydipsia" name="polydipsia" value={polydipsia} onChange={handlePolydipsiaChange}>
                        <FormControlLabel value="1" control={<Radio />} label="Yes" />
                        <FormControlLabel value="0" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <br/>


                <FormControl component="fieldset">
                    <FormLabel component="legend">Sudden Weight Loss</FormLabel>
                    <RadioGroup aria-label="weight_loss" name="weightloss" value={weight_loss} onChange={handleWeightChange}>
                        <FormControlLabel value="1" control={<Radio />} label="Yes" />
                        <FormControlLabel value="0" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <br/>


                <FormControl component="fieldset">
                    <FormLabel component="legend">Weakness</FormLabel>
                    <RadioGroup aria-label="weakness" name="weakness" value={weakness} onChange={handleWeaknessChange}>
                        <FormControlLabel value="1" control={<Radio />} label="Yes" />
                        <FormControlLabel value="0" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <br/>


                <FormControl component="fieldset">
                    <FormLabel component="legend">Polyphagia</FormLabel>
                    <RadioGroup aria-label="polyphagia" name="polyphagia" value={polyphagia} onChange={handlePolyphagiaChange}>
                        <FormControlLabel value="1" control={<Radio />} label="Yes" />
                        <FormControlLabel value="0" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <br/>


                <FormControl component="fieldset">
                    <FormLabel component="legend">Genital Thrush</FormLabel>
                    <RadioGroup aria-label="genital" name="genital" value={thrush} onChange={handleThrushChange}>
                        <FormControlLabel value="1" control={<Radio />} label="Yes" />
                        <FormControlLabel value="0" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <br/>


                <FormControl component="fieldset">
                    <FormLabel component="legend">Visual Blurring</FormLabel>
                    <RadioGroup aria-label="visual" name="visual" value={visual} onChange={handleVisualChange}>
                        <FormControlLabel value="1" control={<Radio />} label="Yes" />
                        <FormControlLabel value="0" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <br />
                    
                <FormControl component="fieldset">
                    <FormLabel component="legend">Itching</FormLabel>
                    <RadioGroup aria-label="itching" name="itching" value={itching} onChange={handleItchingChange}>
                        <FormControlLabel value="1" control={<Radio />} label="Yes" />
                        <FormControlLabel value="0" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Submit
            </Button>
            </form>
        </div>
        <Copyright />
    </Container>
  );
}