import './ProjectCard.css'

export const ProjectCard = (props) => {
    
    return(
        <fieldset className='projectCard'>
            <img className='projectScreenshot' src={props.source} alt={props.alt}></img>
            <div className="projectCardTextContent">
                <p>{props.title}</p>
                <p>Languages/tools used: {props.languages}</p>
                <p>{props.description}</p>
            </div>
        </fieldset>
    )
}