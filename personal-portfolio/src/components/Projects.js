import React, { useState } from 'react'
import { ProjectCard } from './ProjectCard'
import Library from '../images/library.jpg'

function Projects() {
    
    const [images] = useState([
        ['Library Project Screenshot', Library]
    ])
    
    return (
        <div className='projectsSection'>
            <h2>Projects</h2>
            <grid>
                <div className="projectCard">
                    <ProjectCard source={images[0][1]} alt={images[0][0]} title={LIBRARY.title} languages={LIBRARY.languages} description={LIBRARY.description}/>
                </div>
            </grid>
        </div>
    )
}

const LIBRARY = {
    title: 'Library',
    languages: 'HTML, CSS, and JavaScript',
    description: 'Library project using object literals, prototypal inheritance, and constructors'
}

/*Make a subcomponent for individual project cards (functional components)*/
export default Projects