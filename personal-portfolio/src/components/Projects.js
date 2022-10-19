import React from 'react'
import { ProjectCard } from './ProjectCard'

class Projects extends React.Component {
    render() {
        return (
            <div className='projectsSection'>
                <h2>Projects</h2>
                <p>Grid containing the individual project sections</p>
                <ProjectCard />
            </div>
        )
    }
}
/*Make a subcomponent for individual project cards (functional components)*/
export default Projects