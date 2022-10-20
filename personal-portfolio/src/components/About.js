import React, { useEffect } from 'react'
import "./About.css"
import Working from '../images/working.jpg'

function stickyHeader(headerToStick) {
    let rect = headerToStick.getBoundingClientRect()
    if (rect.top <= 60){
        headerToStick.classList.add('sticky')
    }else {
        console.log('hello')
        //headerToStick.classList.remove('sticky')
    }
}

export function About() {
    useEffect(() => {
        const header = document.getElementById('aboutHeader')
        window.onscroll = function() {
            stickyHeader(header)
        }
    }, [])
    return (
        <div className='aboutSection'>
            <h2 id='aboutHeader'>About</h2>
            <div className="bio">
                <h3 className='bioHeader'>Bio</h3>
                <p>In 2022, after many false starts, I decided to finally pursue my goal of becoming a 
                    software engineer. From the moment I made my first basic website using nothing but HTML 
                    I was hooked. From then on I decided that I must learn as much as I possibly could about 
                    coding and web development.
                </p>
            </div>
            <div className='aboutMe'>
                <div className="aboutMeText">
                    <h3>About Me</h3>
                    <p>Outside of coding my hobbies include:</p>
                    <ul>
                        <li>Video games</li>
                        <li>Playing guitar</li>
                        <li>Reading</li>
                        <li>Collecting obscure movies</li>
                    </ul>
                </div>
                <img src={Working} alt='Woman working at desk'></img>
            </div>
        </div>
    )
}