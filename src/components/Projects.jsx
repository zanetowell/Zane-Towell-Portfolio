import React from 'react'
import poke from '../images/pokelibrary.png'
import waters from '../images/watersreviewed.png'
import sandwich from '../images/sandwichio.png'
import curate from '../images/curate.png'


const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <h2 className='my-projects'>Projects</h2>
      <div className='projects-columns'>
        <div className='project-1'>
          <img src={poke} height='300px' alt=''/>
          <div className='p1info'>
            <h3>Poké Library</h3>
            <article>A fun simple app to let users search any pokemon, see their base stats, and add the pokemon to their party!</article>
          </div>
        </div>
        <div className='project-2'>
          <img src={waters} height='300px' alt=''/>
          <div className='p2info'>
            <h3>Waters:Reviewed</h3>
            <article>My first project to use Node, Express, and MongoDB. A fun way to learn RESTful routing, it allows users to find or add their favorite waters and leave reviews!</article>
          </div>
        </div>
        <div className='project-3'>
          <img src={sandwich} height='300px' alt=''/>
          <div className='p3info'>
            <h3>Sandwich.IO</h3>
            <article>A group project built with Python, Django, and PostgreSQL. This app allows users to add ingredients and craft the sandwich of their wildest dreams!</article>
          </div>
        </div>
        <div className='project-4'>
          <img src={curate} height='300px' alt=''/>
          <div className='p4info'>
            <h3>Curate</h3>
            <article>A MERN stack app that uses Firebase to implement full authentication and authorization. It allows users to create personalized study topics and materials! There's even Lofi!</article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects