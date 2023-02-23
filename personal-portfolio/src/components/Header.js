import './Header.css'
//import { HashLink as Link } from 'react-router-hash-link'

export const Navbar = () => {
    const load = (targetId, e) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        target.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', '');
    }

    function loadHeader(e) {
        e.preventDefault();
        document.documentElement.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState({}, '', '');
    }
    return(
        <>
            <div className='navbar sticky'>
                <a className='navLink' href='#homePage' onClick={loadHeader}>Home</a>
                <a className='navLink' href='#aboutPage' onClick={(e) => load('aboutPage', e)}>About</a>
                <a className='navLink' href='#experiencePage' onClick={(e) => load('experiencePage', e)}>Experience</a>
                <a className='navLink' href='#projectsPage' onClick={(e) => load('projectsPage', e)}>Projects</a>
                <a className='navLink' href='#resumePage' onClick={(e) => load('resumePage', e)}>Resume</a>
                <a className='navLink' href='#contactPage' onClick={(e) => load('contactPage', e)}>Contact</a>
            </div>
        </>
    )
}