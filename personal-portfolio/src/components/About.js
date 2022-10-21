import React, { useEffect, useRef } from 'react'
import "./About.css"
import Working from '../images/working.jpg'

/*export function stickyHeader(header, emptyHeader) {
    let sticky = header.offsetTop
    let empty = emptyHeader.offsetTop
   // console.log(sticky)
    console.log(window.pageYOffset)
    if ((window.pageYOffset + 50) > sticky){
        header.classList.add('stickyHeader')
        console.log('stick')
        }
    if (window.pageYOffset < empty) {
        header.classList.remove('stickyHeader')
        console.log('unstick')
        }
}

function replaceHeader() {

}*/

export function About() {
    /*const headerRef = useRef(null)
    const emptyHeaderRef = useRef(null)
    useEffect(() => {
        const header = headerRef.current
        const emptyHeader = emptyHeaderRef.current
        //const stickyHeader = document.getElementsByClassName('header')
        //console.log(header.current)
        window.onscroll = function() {
            stickyHeader(header, emptyHeader)
        }
    }, [])*/
    return (
        <>
            <div id='aboutPageStickyHeader' className='stickyHeader' /*ref={emptyHeaderRef}*/></div>
            <div className='aboutSection' id='aboutPage'>
                <h2 id='aboutHeader' className='header' /*ref={headerRef}*/>About</h2>
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
        </>
    )
}