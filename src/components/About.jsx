import React from 'react'
import profilePicture from '../images/pfp.jpeg'



const About = () => {
  return (
    <div className='about'>
      <aside className='about-pic-container'>
        <img src={profilePicture} alt='' className='about-pic' height='350px'/>
      </aside>
      <article className='about-blurb'>
        <h3>I'm a highly motivated software engineer that creates intuitive solutions and designs.
          <br />
            My background in customer service and management gave me the skills needed to continually
            grow and learn in an ever-changing environment.</h3>
      </article>
    </div>
  )
}

export default About