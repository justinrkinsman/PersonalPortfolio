import React, { useState } from 'react'
import { ProjectCard } from './ProjectCard'
import Library from '../images/library.jpg'
import './Projects.css'

function Projects() {
    
    const [images] = useState([
        ['Library Project Screenshot', Library]
    ])
    
    return (    
        <div className='projectsSection' id='projectsPage'>
            <h2 id='projectsHeader' className='header'>Projects</h2>
            <div className="projectGrid secondaryHeader">
                <ProjectCard source={images[0][1]} alt={images[0][0]} title={LIBRARY.title} languages={LIBRARY.languages} description={LIBRARY.description} preview={LIBRARY.preview} repo={LIBRARY.repo} />
                <ProjectCard source={images[0][1]} alt={images[0][0]} title={BATTLESHIP.title} languages={BATTLESHIP.languages} description={BATTLESHIP.description} preview={LIBRARY.preview} repo={LIBRARY.repo}/>
                <ProjectCard source={images[0][1]} alt={images[0][0]} title={MEMORY.title} languages={MEMORY.languages} description={MEMORY.description} preview={MEMORY.preview} repo={MEMORY.repo}/>
            </div>
        </div>
    )
}

const LIBRARY = {
    title: 'Library',
    languages: 'HTML, CSS, and JavaScript',
    description: 'Library app to keep track of books read',
    preview: 'https://justinrkinsman.github.io/library-livepreview/',
    repo: 'https://github.com/justinrkinsman/library-livepreview'
}

const BATTLESHIP = {
    title: 'Battleship',
    languages: 'HTML, CSS, JavaScript, Jest',
    description: 'Battleship game based on the popular board game',
    preview: 'https://justinrkinsman.github.io/battleship/',
    repo: 'https://github.com/justinrkinsman/library-livepreview'
}

const MEMORY = {
    title: 'Memory Card',
    languages: 'HTML, CSS, JavaScript, ReactJS',
    description: 'The object of this game is to not click the same card twice',
    preview: 'https://justinrkinsman.github.io/MemoryCard-LivePreview/',
    repo: 'https://github.com/justinrkinsman/MemoryCard-LivePreview'
}

export default Projects