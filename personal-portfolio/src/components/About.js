import React from 'react'
import "./About.css"
import Working from '../images/working.jpg'
import { useEffect, useRef } from 'react'

export function About() {
    const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;

    const onScroll = () => {
      const top = text.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight * 0.55) {
        text.classList.add('active')
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

    return (
        <div className='aboutSection' id='aboutPage'>
            <h2 id='aboutHeader' className='header'>About</h2>
            <h3 className='bioHeader secondaryHeader'>Bio</h3>
            <div className="aboutSectionContent slide-in" ref={textRef}>
                <div className="bio-text">
                    <p>In 2022, after many false starts and dead-end jobs, I decided to finally get off my butt
                        and pursue my goal of becoming a software engineer. I landed on JavaScript as the
                        language I wanted to learn and started down the path of web development. I treated
                        learning to code as a full-time job and began coding projects for 6-8 hours every
                        weekday. This past year has been an eye-opening experience and I can truly say, with
                        all sincerity, that learning to code has changed my life. I am so excited to bring my
                        new-found skills to the workforce and start my new life as a software engineer.
                    </p>
                    <div className="aboutMeText">
                        <h3>About me</h3>
                        <p className='outsideOfCoding'>Outside of coding my hobbies include:</p>
                        <ul>
                            <li>Video games</li>
                            <li>Playing guitar</li>
                            <li>Reading</li>
                            <li>Watching bad movies</li>
                        </ul>
                    </div>
                </div>
                <img id='meWorking' src={Working} alt='Woman working at desk'></img>
            </div>
        </div>
    )
}

/*
In 2022, after one too many failed job interviews, I had finally had enough. I was fed up with not having any 
skills to put on a resume. I decided that it was time to finally get off my butt and start pursuing my goal
of becoming a software engineer. But not only was I going to learn to code, I was going to get so good that 
employers would have no choide but to hire me.
*/