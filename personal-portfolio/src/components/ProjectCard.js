import './ProjectCard.css'

export const ProjectCard = (props) => {
    
    return(
        <fieldset className='projectCard'>
            <img className='projectScreenshot' src={props.source} alt={props.alt}></img>
            <div className="projectCardTextContent">
                <p className='projectCardFont'>{props.title}</p>
                <p className='projectCardFont'>Built with: {props.languages}</p>
                <p className='projectCardFont'>{props.description}</p>
            </div>
        </fieldset>
    )
}