import './Contact.css'

export const Contact = () => {
    return(
        <div className='contactSection' id='contactPage'>
            <h2 id='resumeHeader' className='header'>Contact Information</h2>
            <h4>Justin Kinsman</h4>
            <p>If anything you've seen here is of interest and you would like to discuss possible 
                employment or if you have any questions please feel free to contact me.
            </p>
            <div className="contactInfo">
                <div className="links">
                    <div className="emailLink">
                        <p>Email</p>
                        <p>justinrkinsman@gmail.com</p>
                    </div>
                    <div className="githubLink">
                        <p>Github</p>
                        <p>https://github.com/justinrkinsman</p>
                    </div>
                    <div className="linkedInLink">
                        <p>LinkedIn</p>
                        <p>https://www.linkedin.com/in/justin-kinsman</p>
                    </div>
                </div>
            </div>
        </div>
    )
}