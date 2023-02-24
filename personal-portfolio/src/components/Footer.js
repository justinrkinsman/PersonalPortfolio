import './Footer.css'

export const Footer = () => {
    return(
        <div className='footer'>
            <p>Developed by Justin Kinsman</p>
            <p>2023</p>
            <div className='footerLinks'>
                <a href="https://github.com/justinrkinsman" target='_blank' rel='noopener noreferrer'>
                    <p>Github</p>
                </a>
                <a href="https://www.linkedin.com/in/justin-kinsman" target='_blank' rel='noopener noreferrer'>
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    )
}