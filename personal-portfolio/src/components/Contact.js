import './Contact.css'

export const Contact = () => {
    return(
        <div className='contactSection'>
            <h2>Contact Information</h2>
            <h4>Justin Kinsman</h4>
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