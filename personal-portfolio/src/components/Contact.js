import './Contact.css'

export const Contact = () => {
    return(
        <div className='contactSection'>
            <h2>Contact Information</h2>
            <h4>Justin Kinsman</h4>
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
    )
}