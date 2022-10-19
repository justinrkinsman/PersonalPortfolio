import './ProjectCard.css'

export const ProjectCard = (props) => {
    
    return(
        <fieldset className='projectCard'>
            <img src={props.source} alt={props.alt}></img>
            <p>{props.title}</p>
            <p>{props.languages}</p>
            <p>{props.description}</p>
        </fieldset>
    )
}