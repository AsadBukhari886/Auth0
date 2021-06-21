import { useAuth0 } from '@auth0/auth0-react'
import React from 'react';
import Login from './Login';
import Logout from './Logout';

export default function AuthenticationButtonz(){
    const {isAuthenticated}=useAuth0();
    return isAuthenticated?<Login/>:<Logout/>
}