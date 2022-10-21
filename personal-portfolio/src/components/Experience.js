import React from 'react'
import './Experience.css'

export function Experience() {
    //const ref = useRef(null)
    /*useEffect(() => {
        const header = document.getElementById('experienceHeader')
        const emptyHeader = document.getElementById('experiencePageStickyHeader')
        console.log(ref.current.id)
        window.onscroll = function() {
            stickyHeader(header, emptyHeader)
        }
    }, [])*/
    return (
        <>
            <div id='experiencePageStickyHeader' className='pageStickyHeader' /*ref={ref}*/></div>
            <div className='experienceSection' id='experiencePage'>
                <h2 id='experienceHeader' className='header'>Experience</h2>
                <div className='handsOnExperience'>
                    <h3>Hands-On Experience</h3>
                    <h4>The Odin Project</h4>
                    <p>The Odin Project is the online resource that I used to learn web development. This is
                        where I learned all of the languages and tools that I use today to create my web apps.
                        The most important things that I learned here were HTML, CSS, JavaScript, React, and
                        NodeJS
                    </p>
                </div>
                <div className="tools">
                    <h3>Languages and Tools I Use</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Firebase</li>
                        <li>Github</li>
                        <li>NodeJS</li>
                        <li>VSCode</li>
                        <li>Linux</li>
                        <li>Jest</li>
                        <li>WCAG</li>
                        <li>Webpack</li>
                    </ul>
                </div>
            </div>
        </>
    )
}