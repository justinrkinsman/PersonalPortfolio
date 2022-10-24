import ResumeImage from '../images/resume.jpg'
import './Resume.css'

export const Resume = () => {
    return (
        <>
            <div id='resumePageStickyHeader' className='pageStickyHeader'></div>
            <div className='resumeSection' id='resumePage'>
                <h2 id='resumeHeader' className='header'>Resume</h2>
                <div className="resumeContent secondaryHeader">
                    <img src={ResumeImage} alt='Resume Placeholder'></img>
                    <button>Download PDF</button>
                </div>
            </div>
        </>
    )
}