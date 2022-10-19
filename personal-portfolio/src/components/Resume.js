import ResumeImage from '../images/resume.jpg'

export const Resume = () => {
    return (
        <div className='resumeSection'>
            <h2>Resume</h2>
            <img src={ResumeImage} alt='Resume Placeholder'></img>
            <button>Download PDF</button>
        </div>
    )
}