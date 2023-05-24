import React from 'react'

const Skills = () => {
  return (
    <div className='skills'>
      <h2 className='my-skills'>My Skills</h2>
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