import ResumeImage from '../images/resume.jpg'
import './Resume.css'

export const Resume = () => {
    return (
        <div className='resumeSection'>
            <h2>Resume</h2>
            <div className="resumeContent">
                <img src={ResumeImage} alt='Resume Placeholder'></img>
                <button>Download PDF</button>
            </div>
        </div>
    )
}