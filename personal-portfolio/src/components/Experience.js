import React from 'react'
import './Experience.css'

export function Experience() {
    return (
        <div className='experienceSection' id='experiencePage'>
            <h2 id='experienceHeader' className='header'>Experience</h2>
            <div className="experienceContent">
                <div className='handsOnExperience'>
                    <h3>Hands-On Experience</h3>
                    <h4>The Odin Project</h4>
                    <p>The Odin Project is the online resource that I used to learn web development. This is
                        where I learned all of the languages and tools that I use today to create my web apps.
                        The most important things that I learned here were HTML, CSS, JavaScript, React, and
                        NodeJS
                    </p>
                </div>
                <div>
                    <h3 className='languagesHeader'>Languages and Tools I Use</h3>
                    <ul className="tools">
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
        </div>
    )
}