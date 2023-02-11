import React from 'react'
import Profile from '../images/profile.jpg'
import "./Home.css"

class LandingPage extends React.Component {
    render() {
        return (
            <div className='landingPage' id='homePage'>
                <div className="landingPageText">
                    <div className="slide-in-one">
                        <h1 className='intro'>Hello There!</h1>
                    </div>
                    <div className="slide-in-two">
                        <p className='name'>I'm Justin</p>
                    </div>
                    <div className="typewriter">
                        <p className='selfTaught'>Self-taught full stack engineer</p>
                    </div>
                </div>
                <div className="slide-in-three">
                    <img id='headshot' src={Profile} alt='Placeholder'></img>
                </div>
            </div>
        )
    }
}

export default LandingPage