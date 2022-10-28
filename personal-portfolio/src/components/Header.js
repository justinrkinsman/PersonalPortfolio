import './Header.css'
//import { HashLink as Link } from 'react-router-hash-link'

export const Navbar = () => {
    return(
        <>
            <div className='navbar sticky'>
                <a className='navLink' href='#homePage'>Home</a>
                <a className='navLink' href='#aboutPage'>About</a>
                <a className='navLink' href='#experiencePage'>Experience</a>
                <a className='navLink' href='#projectsPage'>Projects</a>
                <a className='navLink' href='#resumePage'>Resume</a>
                <a className='navLink' href='#contactPage'>Contact</a>
            </div>
        </>
    )
}