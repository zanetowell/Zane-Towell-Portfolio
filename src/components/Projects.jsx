import React from 'react'
import poke from '../images/pokelibrary.png'
import waters from '../images/watersreviewed.png'
import sandwich from '../images/sandwichio.png'
import curate from '../images/curate.png'


const Projects = () => {
  return (
    <div className='projects'>
      <h2 className='my-projects'>Projects</h2>
      <div className='projects-columns'>
        <div className='project-1'>
          <img src={poke} height='200px' alt=''/>
        </div>
        <div className='project-2'>
          <img src={waters} height='200px' alt=''/>
        </div>
        <div className='project-3'>
          <img src={sandwich} height='200px' alt=''/>
        </div>
        <div className='project-4'>
          <img src={curate} height='200px' alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Projects