import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
export default function Signup(){
    const {loginWithRedirect}=useAuth0();

    return (<>
    <h4>this is signup page</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac purus eget justo laoreet aliquam malesuada in nibh.
 Donec a justo et justo aliquam aliquam nec feugiat risus. Vestibulum sit amet euismod purus. Cras arcu nisi, vestibulum
 a congue a, facilisis quis mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
Praesent accumsan euismod diam sit amet vehicula. Praesent sit amet tortor nibh. Phasellus lobortis metus ac ex lacinia
 imperdiet.</p>
 <input type="submit" onClick={()=>loginWithRedirect({
     screen_hint:"Signup"
 })}  
 value="signup" className="btn btn-primary"/>
    </>)
}