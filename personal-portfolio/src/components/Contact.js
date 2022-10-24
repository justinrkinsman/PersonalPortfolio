import './Contact.css'

export const Contact = () => {
    return(
        <>
            <div id='contactPageStickyHeader' className='pageStickyHeader'></div>
            <div className='contactSection' id='contactPage'>
                <h2 id='resumeHeader' className='header'>Contact Information</h2>
                <h4 className='secondaryHeader'>Justin Kinsman</h4>
                <p>If any of what you've seen here interests you or if you have questions about any of my projects
                    please feel free to contact me.
                </p>
                <div className="contactInfo">
                    <div className="phoneAndEmail">
                        <p>Phone: (902) 979-3227</p>
                        <p>Email: justinrkinsman@gmail.com</p>
                    </div>
                    <div className="links">
                        <p>Github</p>
                        <p>LinkedIn</p>
                    </div>
                </div>
            </div>
        </>
    )
}