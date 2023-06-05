import React from 'react'
import '../styles/contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <h2 className='my-contact-info'>Get in Touch!</h2>
        <h2 className='contact-top'>You can reach me here!</h2>
        <div className='email-phone'>
          <h2 className='email'>zanetowelldev@gmail.com</h2>
          <h2 className='phone'>727-688-3070</h2>
        </div>
        <h2 className='contact-bot'>Connect with me!</h2>
        <div className='linkedin-github'>
          <a href='https://www.linkedin.com/in/zane-towell/' className='linkedin' target='_blank' rel='noreferrer'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt='' height='100px'/>LinkedIn
            </a>
          <a href='https://github.com/zanetowell' className='github' target='_blank' rel='noreferrer'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt='' height='100px'/>GitHub
            </a>
        </div>
    </div>
  )
}

export default Contact