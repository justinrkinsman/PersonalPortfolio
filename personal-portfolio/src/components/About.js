import React from 'react'

class About extends React.Component {
    render() {
        return (
            <div className='aboutSection'>
                <div className="bio">
                    <h1>Bio</h1>
                    <p>This is my bio</p>
                </div>
                <div className='aboutMe'>
                    <h1>About Me</h1>
                    <p>Hobbies and interests</p>
                </div>
                <p>picture of me working</p>
            </div>
        )
    }
}

export default About