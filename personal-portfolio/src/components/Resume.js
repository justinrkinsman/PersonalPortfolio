import './Resume.css'
import ResumePDF from '../images/Resume_2022_Copy.pdf'

export const Resume = () => {
    return (
        <div className='resumeSection' id='resumePage'>
            <h2 id='resumeHeader' className='header'>Resume</h2>
            <div className="resumeContent">
                <iframe title='ResumePDFViewer' className='resumeScreenshot' src={ResumePDF}></iframe>
                <a href={ResumePDF} download='Justin_Kinsman_Resume'><button className='PDFButton'>Download PDF</button></a>
            </div>
        </div>
    )
}