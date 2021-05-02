import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

import Navigation from './Navigation';
import '../App.css';
import * as routes from '../Config/routes';
import HomePage from './Home';
import AboutPage from './About'
import ProfilePage from './Profile'
import LogoutPage from './Logout'

Amplify.configure(awsconfig);

const App = ()=> {
  const loggedIn = 0
  
  return (
    <div>

    <Router>
      <div>
        <Navigation/>
        <Route exact path={routes.HOME} render={() => (
            <HomePage />
        )}/>
        <Route path={routes.ABOUT} render={() => (
          <AboutPage /> 
        )}/>
        <Route path={routes.PROFILE} render={() => (
          <ProfilePage /> 
        )}/>

        <Route path={routes.LOGOUT} render={() => (
          <LogoutPage />
        )}/>
      </div>
    </Router>
    </div>);
}

export default (App);
