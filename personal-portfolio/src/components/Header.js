import './Header.css'
//import { HashLink as Link } from 'react-router-hash-link'

export const Navbar = () => {
    return(
        <div className='navbar sticky'>
            <a className='activeNavLink' href='#homePage'>Home</a>
            <a href='#aboutPage'>About</a>
            <a href='#experiencePage'>Experience</a>
            <a href='#projectsPage'>Projects</a>
            <a href='#resumePage'>Resume</a>
            <a href='#contactPage'>Contact</a>
        </div>
    )
}