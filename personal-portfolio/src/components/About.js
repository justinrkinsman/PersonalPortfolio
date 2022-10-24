import React from 'react'
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
            <div id='aboutPageStickyHeader' className='pageStickyHeader'></div>
            <div className='aboutSection' id='aboutPage'>
                <h2 id='aboutHeader' className='header'>About</h2>
                <div className="bio">
                    <h3 className='bioHeader secondaryHeader'>Bio</h3>
                    <p>In 2022, after many false starts and dead-end jobs, I decided to finally get off my 
                        butt and pursue my goal of becoming a software engineer. I landed on JavaScript as
                        the language I wanted to learn and started down the path of web development. I 
                        treated learning to code as a full-time job and began coding projects for 6-8 hours 
                        every weekday. This past year has been an eye-opening experience and I can truly say,
                        with all sincerity, that learning to code has changed my life. I am so excited to
                        bring my new-found skills to the workforce and start my new life as a software
                        engineer.
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