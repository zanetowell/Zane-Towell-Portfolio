import React from 'react'
import '../styles/skills.css'


const Skills = () => {
  return (
    <div className='skills' id='skills'>
      <h2 className='my-skills'>My Skills</h2>
      <div className='skills-blurb'>
        <h3 className='frontend-blurb'>With a strong foundation in frontend development, I bring a deep understanding of responsive design principles and strive to create visually stunning, user-friendly websites.
            I'm proficient in HTML, CSS, and JavaScript, as well as various frameworks including Bootstrap and React.
        </h3>
        <h3 className='backend-blurb'>As for backend I have experience with relational and NoSQL databases such as MongoDB Atlas and PostgreSQL. I've also leveraged backend frameworks like Express and Django to develop secure and efficient APIs.</h3>
      </div>
      <div className='skills-list-container'>
        <ul className='skills-list'>
          <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" height='80px' alt='html'/></li>
          <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" height='80px' alt='css'/></li>
          <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" height='80px' alt='javascript'/></li>
          <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" height='80px' alt='mongodb'/></li>
          <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height='80px' alt='express'/></li>
          <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" height='80px' alt='react'/></li>
          <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height='80px' alt='node'/></li>
        </ul>
      </div>
    </div>
  )
}

export default Skills