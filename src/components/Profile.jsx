import { useAuth0 ,withAuthenticationRequired} from '@auth0/auth0-react'
import React from 'react';
import Login from './Login';
function Profile() {
    const { user,onRedirectCallback } = useAuth0();
    // const { name, picture, email } = user;
    return (<>
        {/* <div>
            <img src={picture} alt="picture" />
        </div>
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
        <pre>
        {JSON.stringify(user, null, 2)}
        </pre> */}
        <h2>prifile</h2>

    </>)
}
// export default Profile;
export default withAuthenticationRequired({
    onRedirecting:()=><p>Loading</p>,
onRedirectCallback:()=><Profile/>
})