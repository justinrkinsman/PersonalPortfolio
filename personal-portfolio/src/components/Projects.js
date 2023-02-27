import React, { useState } from 'react'
import { ProjectCard } from './ProjectCard'
import Library from '../images/library.jpg'
import Members_Only from '../images/members-only.jpg'
import Blog_API from '../images/blog_api.jpg'
import InstaBook from '../images/instabook.jpg'
import './Projects.css'

function Projects() {
    
    const [images] = useState([
        ['Library Project Screenshot', Library],
        ['Members Only Project Screenshot', Members_Only],
        ['Blog API Project Screenshot', Blog_API],
        ['InstaBook Project Screenshot', InstaBook]
    ])
    
    return (    
        <div className='projectsSection' id='projectsPage'>
            <h2 id='projectsHeader' className='header'>Projects</h2>
            <div className="projectGrid secondaryHeader projectTest">
                <ProjectCard className='project-screenshot' source={images[3][1]} alt={images[3][0]} title={INSTABOOK.title} languages={INSTABOOK.languages} description={INSTABOOK.description} preview={INSTABOOK.preview} repo={INSTABOOK.repo}/>
                <ProjectCard className='project-screenshot' source={images[2][1]} alt={images[2][0]} title={BLOG_API.title} languages={BLOG_API.languages} description={BLOG_API.description} preview={BLOG_API.preview} repo={BLOG_API.repo}/>
                <ProjectCard className='project-screenshot' source={images[1][1]} alt={images[1][0]} title={MEMBERS_ONLY.title} languages={MEMBERS_ONLY.languages} description={MEMBERS_ONLY.description} preview={MEMBERS_ONLY.preview} repo={MEMBERS_ONLY.repo}/>
                <ProjectCard className='project-screenshot' source={images[0][1]} alt={images[0][0]} title={LIBRARY.title} languages={LIBRARY.languages} description={LIBRARY.description} preview={LIBRARY.preview} repo={LIBRARY.repo} />
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

const BLOG_API = {
    title: 'Blog API',
    languages: 'JavaScript, Pug, CSS, EJS, Mongoose, Express',
    description: 'Blog site using REST API for the backend to host two separate front-ends: one for blog owner to make posts, one for users to sign in and leave comments',
    preview: 'https://github.com/justinrkinsman/Blog_API',
    repo: 'https://github.com/justinrkinsman/Blog_API'
}

const INSTABOOK = {
    title: "InstaBook",
    languages: 'JavaScript, Pug, CSS, EJS, Mongoose, Express',
    description: 'Social media site that allows users to view posts and add friends. Users can only see posts of people they are friends with',
    preview: 'https://github.com/justinrkinsman/InstaBook',
    repo: 'https://github.com/justinrkinsman/InstaBook'
}

export default Projects