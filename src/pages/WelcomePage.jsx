import React, {useState, useEffect} from 'react'
import './WelcomePage.css'
import { auth } from '../config'
import Home from './Home'
import { onAuthStateChanged } from '../config'

export default function WelcomePage() {

   const [signedOut, setSignedOut] = useState(false)
   const [user, setUser] = useState(true)
   
   useEffect(() => {

    //Get signedIn user
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // ...
          const {displayName, photoURL} = user
          setUser({displayName, photoURL})
        } else {
          // User is signed out
          // ...
          console.log('user signed out')
          setUser(null)
        }
      });
}, [])

    //Handle Wish display
    function handleWishDisplay(event) {
        event.preventDefault()
        document.querySelector('.welcomePage-wish_div').style.display = 'block'
    }

    //Handle sign out
    const handleSignOut = (event) => {
        event.preventDefault()
        auth.signOut()
        setSignedOut(true)
    }
    return (
        <div className='welcomePage-wrapper'>
            {signedOut ? <Home /> :
            <div>
                <div className='welcomePage-div'>
                <div className='welcomePage-top_flex'>
                    <img src={user.photoURL} alt='img' className='welcomePage-User_Img' />
                    <h1 className='welcomePage-welcome'>You are welcome, <div className='welcomePage-user_name'>{user.displayName }</div></h1>
                    <button className='welcomePage-signOut_btn' onClick={handleSignOut}>Sign out</button>
                </div>
                <p className='welcomePage-instruction'>Help us say happy birthday to our Prof., Sam Afolabi by clicking the 'Wish Button' below:</p>
                <button className='welcomePage-wish_btn' onClick={handleWishDisplay}>Wish Button</button>
            </div>
            <div className='welcomePage-wish_div'>
                <div className='welcomePage-div'>
                    <span className='welcomePage-wish'>Happy Birthday</span>
                    <span className='welcomePage-celebrant'>Sam Afolabi</span>
                    <p className='welcomePage-note'>
                        Friends Birthday Wishes  On your birthday, today, I wish you a year with loads of fun, excitement and beautiful memories. Happy Birthday.  You are a good friend and an even better person. May God bless you with wonderful times ahead. Happy Birthday and thanks for the friendship we share.  I wish you a very Happy and warm Birthday. Your friendship has touched all of us. May you get all you desire.  With a new year of your journey, shall come more challenges, opportunities and greater success. May God bless you. Happy Birthday.  You are an amazing friend, with a good heart. May God pour his love and warmth on you, in all walks of life. I wish you a very happy birthday.  With a friend like you, who cares and supports with such a vibrant zeal, life and world turns in to so much fun. Thanks and wishing you a very sweet birthday.  Each day my friend you learn new things, Each phase is like life's new innings. Sometimes you get chances, sometimes you choose, In this game of life, a smile is w Friends Birthday Wishes On your birthday, today, I wish you a year with loads of fun, excitement and beautiful memories. Happy Birthday. You are a good friend and an even better person. May God bless you with wonderful times ahead. Happy Birthday and thanks for the friendship we share. I wish you a very Happy and warm Birthday. Your friendship has touched all of us. May you get all you desire. With a new year of your journey, shall come more challenges, opportunities and greater success. May God bless you. Happy Birthday. You are an amazing friend, with a good heart. May God pour his love and warmth on you, in all walks of life. I wish you a very happy birthday. With a friend like you, who cares and supports with such a vibrant zeal, life and world turns in to so much fun. Thanks and wishing you a very sweet birthday.
                    </p>
                    <span className='welcomePage-cheers'>We love you!!!</span>
                </div>
            </div>
            </div>
            }
        </div>
    )
}
