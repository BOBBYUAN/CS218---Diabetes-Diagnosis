import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Navigation from './Navigation';
import '../App.css';
import * as routes from '../Config/routes';
import HomePage from './Home';
import LoginPage from './Login'
import SignupPage from './Signup'
import AboutPage from './About'
import ProfilePage from './Profile'

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
      </div>
    </Router>
    </div>);
}

export default App;
