import React, { useEffect, useState } from 'react'
import './Home.css'
import WelcomePage from './WelcomePage'
import { auth, provider, signInWithRedirect, getRedirectResult, onAuthStateChanged } from '../config'

export default function Home() {
    //Set user state
    const [user, setUser] = useState(null)
    //Handle Sign in
    const handleSignIn = (event) => {
        event.preventDefault();
        signInWithRedirect(auth, provider);
    }
   
   //Handle redirect result
    useEffect(() => {

  getRedirectResult(auth)
  .then((result) => {
    if(result){
    }else{
//.......
    }
  }).catch((error) => {
console.log(error)
  });
    }, [])
    
    useEffect(() => {

        //Get signedIn user
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // ...
              const {displayName} = user
              setUser({displayName})
            } else {
              // User is signed out
              // ...
              console.log('user signed out')
              setUser(null)
            }
          });
    }, [])

    return (
        <div className='homeWrapper'>
         {user ? <div>
            <WelcomePage />
         </div> : 
         <div>
         <div className='homeContent-div'>
        <div className='homeFlex'>
          <h1 className='homeContent-text'>This site is dedicated to Prof. Sam Afolabi. To view content, sign in by clicking the big button below:</h1>
          <button className='signIn-btn' onClick={handleSignIn}>Sign in</button>
        </div>
      </div>
         </div>
         }
       <p className='copyright'>&copy; Michado 2022</p>
        </div>  
    )
}
