import { useAuth0 } from '@auth0/auth0-react'
import { React, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

export default function Login() {
    const { loginWithRedirect } = useAuth0();
    const history = useHistory();

    useEffect(() => { loginWithRedirect()

    })
    return (<>
        {/* <h3>this is login page</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac purus eget justo laoreet aliquam malesuada in nibh.
     Donec a justo et justo aliquam aliquam nec feugiat risus. Vestibulum sit amet euismod purus. Cras arcu nisi, vestibulum
     a congue a, facilisis quis mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Praesent accumsan euismod diam sit amet vehicula. Praesent sit amet tortor nibh. Phasellus lobortis metus ac ex lacinia
     imperdiet.</p> */}
        {/* <input type="button" onClick={() => loginWithRedirect()} value="Login" className="btn btn-success" /> */}

    </>)
}