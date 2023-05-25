import React from 'react'
import profilePicture from '../images/pfp.jpeg'


const About = () => {
  return (
    <div className='about' id='about-me'>
      <aside className='about-pic-container' data-aos='fade-up'>
        <img src={profilePicture} alt='' className='about-pic' height='400px'/>
      </aside>
      <article className='about-blurb'>
        <h2 className='about-me'>About Me</h2>
        <div className='divider'></div>
        <h3>Hi, my name is Zane!
          <br />
            I'm a developer that's passionate about creating effective frontend designs and efficient backends. Collaboration is at the heart of what I do.
            <br />
            I thrive in dynamic, diverse teams where different perspectives come together to create something extraordinary.
            <br />
             I love working with clients and colleagues, and I believe in fostering open communication and strong relationships to achieve shared goals.
        </h3>
      </article>
    </div>
  )
}

export default About