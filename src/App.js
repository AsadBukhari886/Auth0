
import './App.css';
import Login from './components/Login.jsx';
import Logout from "./components/Logout.jsx";
import Navbar from './components/Navbar';
import Signup from './components/Signup.jsx';
import Home from './components/Home';
import AuthenticationButtonz from './components/AuthenticationButton';
import Auth_nav from './components/Auth_nav';
import { Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './components/Profile';
import External_api from './views/External_api';
import Protected_router from './auth/Protected_router';


function App() {
  const {isLoading}=useAuth0()
  if(isLoading){
    return <h4>Loading...</h4>
  }
    return (
      <div className="App">
        <Navbar/>
         
          <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/logout" component={Logout}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/external-api" component={External_api}/>
            <Route exact path="/profile" component={Profile}/>
            <Route  component={Home}/>
            <Auth_nav/>
          </Switch>
         
        
      </div>
    );
  }

export default App;
