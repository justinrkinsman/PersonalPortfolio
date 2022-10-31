import './ProjectCard.css'
import GitHubIcon from '../images/github.jpg'
import LinkIcon from '../images/link.jpg'

export const ProjectCard = (props) => {
    
    return(
        <fieldset className='projectCard'>
            <div className="imageAndLinks">
                <img className='projectScreenshot' src={props.source} alt={props.alt}></img>
                <div className='projectLinks'>
                    <a title="Repository" target='_blank' rel='noopener noreferrer' href={props.repo}><img src={GitHubIcon} alt='Link to GitHub Repository' className='repositoryLink'></img></a>
                    <a title="Live Preview" target='_blank' rel='noopener noreferrer' href={props.preview}><img src={LinkIcon} alt='Link to live preview of project' className='previewLink'></img></a>
                </div>
            </div>
            <div className="projectCardTextContent">
                <p className='projectCardFont'>{props.title}</p>
                <p className='projectCardFont'>Built with: {props.languages}</p>
                <p className='projectCardFont'>{props.description}</p>
            </div>
        </fieldset>
    )
}