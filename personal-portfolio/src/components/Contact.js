import './Contact.css'

export const Contact = () => {
    return(
        <>
            <div id='contactPageStickyHeader' className='pageStickyHeader'></div>
            <div className='contactSection' id='contactPage'>
                <h2 id='resumeHeader' className='header'>Contact Information</h2>
                <h4 className='secondaryHeader'>Justin Kinsman</h4>
                <p>If anything you've seen here is of interest and you would like to discuss possible 
                    employment or if you have any questions please feel free to contact me.
                </p>
                <div className="contactInfo">
                    <div className="links">
                        <p>Email</p>
                        <p>Github</p>
                        <p>LinkedIn</p>
                    </div>
                </div>
            </div>
        </>
    )
}