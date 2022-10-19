import React from 'react'
import "./About.css"
import Working from '../images/working.jpg'

class About extends React.Component {
    render() {
        return (
            <div className='aboutSection'>
                <h2>About</h2>
                <div className="bio">
                    <h3 className='bioHeader'>Bio</h3>
                    <p>In 2022, after many false starts, I decided to finally pursue my goal of becoming a 
                        software engineer. From the moment I made my first basic website using nothing but
                        HTML I was hooked. From then on I decided that I must learn as much as I possibly 
                        could about coding and web development.</p>
                </div>
                <div className='aboutMe'>
                    <div className="aboutMeText">
                        <h3>About Me</h3>
                        <p>Outside of coding my hobbies include:</p>
                        <ul>
                            <li>Video games</li>
                            <li>Playing guitar</li>
                            <li>Reading</li>
                            <li>Watching campy movies</li>
                        </ul>
                    </div>
                    <img src={Working} alt='Woman working at desk'></img>
                </div>
            </div>
        )
    }
}

export default About