import React from 'react'
import Profile from '../images/profile.jpg'
import "./Home.css"

class LandingPage extends React.Component {
    render() {
        return (
            <div className='landingPage'>
                <div className="landingPageText">
                    <h1 className='intro'>Hello There!</h1>
                    <p className='name'>I'm Justin Kinsman</p>
                    <p className='selfTaught'>Self-taught full stack developer</p>
                </div>
                <div className="profilePic">
                    <img src={Profile} alt='Placeholder'></img>
                </div>
            </div>
        )
    }
}

export default LandingPage