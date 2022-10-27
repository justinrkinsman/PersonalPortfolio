import './ProjectCard.css'
import GitHubIcon from '../images/github.jpg'
import LinkIcon from '../images/link.jpg'

export const ProjectCard = (props) => {
    
    return(
        <fieldset className='projectCard'>
            <div className="imageAndLinks">
                <img className='projectScreenshot' src={props.source} alt={props.alt}></img>
                <div className='projectLinks'>
                    <img src={GitHubIcon} alt='Link to GitHub Repository' className='repositoryLink'></img>
                    <img src={LinkIcon} alt='Link to live preview of project' className='previewLink'></img>
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