import React from 'react'
import profilePicture from '../images/pfp.jpeg'
import '../styles/about.css'

const About = () => {
  return (
    <div className='about' id='about-me'>
      <aside className='about-pic-container' data-aos='fade-up'>
        <img src={profilePicture} alt='' className='about-pic' height='400px'/>
      </aside>
      <article className='about-blurb'>
        <h2 className='about-me'>About Me</h2>
        <div className='divider'></div>
        <h3><b>Hi, my name is Zane!</b>
          <br />
            I'm a developer that's passionate about creating effective frontend designs and efficient backends. Collaboration is at the heart of what I do.
            I thrive in dynamic, diverse teams where different perspectives come together to create something extraordinary.
            I love working with clients and colleagues, and I believe in fostering open communication and strong relationships to achieve our shared goals.
        </h3>
      </article>
    </div>
  )
}

export default About