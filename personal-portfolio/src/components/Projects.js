import React, { useState } from 'react'
import { ProjectCard } from './ProjectCard'
import Library from '../images/library.jpg'
import './Projects.css'

function Projects() {
    
    const [images] = useState([
        ['Library Project Screenshot', Library]
    ])
    
    return (
        <>
            <div id='projectsPageStickyHeader' className='pageStickyHeader'></div>
            <div className='projectsSection' id='projectsPage'>
                <h2 id='projectsHeader' className='header'>Projects</h2>
                <div className="projectGrid">
                    <ProjectCard source={images[0][1]} alt={images[0][0]} title={LIBRARY.title} languages={LIBRARY.languages} description={LIBRARY.description}/>
                    <ProjectCard source={images[0][1]} alt={images[0][0]} title={BATTLESHIP.title} languages={BATTLESHIP.languages} description={BATTLESHIP.description}/>
                </div>
            </div>
        </>
    )
}

const LIBRARY = {
    title: 'Library',
    languages: 'HTML, CSS, and JavaScript',
    description: 'Library project using object literals, prototypal inheritance, and constructors'
}

const BATTLESHIP = {
    title: 'Battleship',
    languages: 'HTML, CSS, JavaScript, Jest',
    description: 'This battleship game was my first attempt at building a project using TDD'
}

/*Make a subcomponent for individual project cards (functional components)*/
export default Projects