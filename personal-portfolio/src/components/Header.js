import './Header.css'

export const Navbar = () => {
    return(
        <div className='navbar'>
            <a className='activeNavLink' href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#experience'>Experience</a>
            <a href='#projects'>Projects</a>
            <a href='#resume'>Resume</a>
            <a href='#contact'>Contact</a>
        </div>
    )
}