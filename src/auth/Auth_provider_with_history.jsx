import React from 'react'
import {Auth0Provider} from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

export default function Auth0providerWithHistory(props){
    const domain="dev-xpf4thel.us.auth0.com";
    const clientId="bDagW640TiF9VtgtOiiwtX6qmJJdB9yE";
    const audience="https://dev-xpf4thel.us.auth0.com/api/v2/";
    const auth0_domain="dev-xpf4thel.us.auth0.com"
    const history=useHistory();
    const onRedirectCallback=(stateApp)=>{
history(stateApp?.returnTo || window.location.pathname)
    }
    return (<>
    <Auth0Provider 
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    >
{props.children}
    </Auth0Provider>
    </>)
}