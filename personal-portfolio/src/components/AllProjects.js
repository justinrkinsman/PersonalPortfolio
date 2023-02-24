import { useNavigate } from "react-router-dom"
import { ProjectCard } from './ProjectCard'
import Memory from '../images/memory.jpg'
import Library from '../images/library.jpg'
import Members_Only from '../images/members-only.jpg'
import Blog_API from '../images/blog_api.jpg'
import { useState } from "react"
import './AllProjects.css'

export function ProjectsPage() {

    const [images] = useState([
        ['Library Project Screenshot', Library],
        ['Memory Card Project Screenshot', Memory],
        ['Members Only Project Screenshot', Members_Only],
        ['Blog API Project Screenshot', Blog_API]
    ])

    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return(
        <div className='all-projects'>
            <h1>All Projects</h1>
            <button onClick={goBack}>Back to Home</button>
            <div className='projectsSection' id='projectsPage'>
                <h2 id='projectsHeader' className='header'>Projects</h2>
                <div className="projectGrid secondaryHeader projectTest">
                    <ProjectCard className='project-screenshot' source={images[2][1]} alt={images[2][0]} title={MEMBERS_ONLY.title} languages={MEMBERS_ONLY.languages} description={MEMBERS_ONLY.description} preview={MEMBERS_ONLY.preview} repo={MEMBERS_ONLY.repo}/>
                    <ProjectCard className='project-screenshot' source={images[0][1]} alt={images[0][0]} title={LIBRARY.title} languages={LIBRARY.languages} description={LIBRARY.description} preview={LIBRARY.preview} repo={LIBRARY.repo} />
                    <ProjectCard className='project-screenshot' source={images[1][1]} alt={images[1][0]} title={MEMORY.title} languages={MEMORY.languages} description={MEMORY.description} preview={MEMORY.preview} repo={MEMORY.repo}/>
                    <ProjectCard className='project-screenshot' source={images[3][1]} alt={images[3][0]} title={BLOG_API.title} languages={BLOG_API.languages} description={BLOG_API.description} preview={BLOG_API.preview} repo={BLOG_API.repo}/>
                </div>
            </div>
        </div>
    )
}

const LIBRARY = {
    title: 'Library',
    languages: 'HTML, CSS, and JavaScript',
    description: 'Library app to keep track of books read',
    preview: 'https://justinrkinsman.github.io/library-livepreview/',
    repo: 'https://github.com/justinrkinsman/library-livepreview'
}

const MEMBERS_ONLY = {
    title: 'Members Only',
    languages: 'ejs, pug, mongoose, mongoDB, express, JavaScript',
    description: 'Chatroom where users can create an account to create, read, update, and delete posts. Features password hashing and salting',
    preview: 'https://membersonly-production.up.railway.app/',
    repo: 'https://github.com/justinrkinsman/MembersOnly'
}

const MEMORY = {
    title: 'Memory Card',
    languages: 'HTML, CSS, JavaScript, ReactJS',
    description: 'The object of this game is to not click the same card twice',
    preview: 'https://justinrkinsman.github.io/MemoryCard-LivePreview/',
    repo: 'https://github.com/justinrkinsman/MemoryCard-LivePreview'
}

const BLOG_API = {
    title: 'Blog API',
    languages: 'JavaScript, Pug, CSS, EJS',
    descript: 'Blog site using REST API for the backend to host two separate front-ends: one for blog owner to make posts, one for users to sign in and leave comments',
    preview: 'https://github.com/justinrkinsman/Blog_API',
    repo: 'https://github.com/justinrkinsman/Blog_API'
}