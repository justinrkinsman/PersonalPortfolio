import './Resume.css'
import ResumePDF from '../images/Resume-PDF.pdf'

export const Resume = () => {
    return (
        <div className='resumeSection' id='resumePage'>
            <h2 id='resumeHeader' className='header'>Resume</h2>
            <div className="resumeContent">
                <iframe title='ResumePDFViewer' className='resumeScreenshot' src={ResumePDF}></iframe>
                <button>Download PDF</button>
            </div>
        </div>
    )
}