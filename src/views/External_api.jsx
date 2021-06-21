import { useAuth0 } from '@auth0/auth0-react'
import React,{useState} from 'react'
export default function External_api(){
    const [message,setMessage]=useState("---")

    const {getAccessTokenSilently}=useAuth0();
    const address="http://localhost:3000";

    const callApi=async ()=>{
        try{
     const respond=await fetch(`${address}/api/messages/public-message`)
     const respondData=await respond.json();
     setMessage(respondData.message)
        }catch(error){
setMessage(error.message)
        }
    };
    const callSecureApi=async ()=>{
        try{
            const token=await getAccessTokenSilently();
            const respond=await fetch(`${address}/api/messages/private-message`,
            // {
            //     header:{
            //         authorization:`Bearer ${token}`
            //     }
            // }
            )
           

            const respondData=await respond.json();
            setMessage(respondData.message)
        }catch(error){
setMessage(error.message)
        }
    }
    
    return (<>
    <h1>External Api</h1>
    <p>nasa is company of technology.</p>
    <div className="btn-group " role="group">
    <input type="button" className="btn btn-primary" value="get public_message" onClick={callApi}/>
    <input type="button" className="btn btn-secondary" value="get private_message" onClick={callSecureApi}/><br/>
    

    </div>
    {message && (
        <div className="mt-5">
          <h6 className="muted">Result</h6>
          <div className="container-fluid">
            <div className="row">
              <code className="col-12 text-light bg-dark p-4">{message}</code>
            </div>
          </div>
        </div>
      )}
    </>)
}