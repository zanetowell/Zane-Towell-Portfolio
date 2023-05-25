import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Nav = () => {



  return (
    <div className='nav'>
      <h1 className='nav-name'>Zane Towell</h1>
      <motion.ul className='nav-list'>
        <motion.li><Link to='about-me' smooth={true}>about</Link></motion.li>
        <motion.li><Link to='skills' smooth={true}>skills</Link></motion.li>
        <motion.li><Link to='projects' smooth={true}>projects</Link></motion.li>
        <motion.li><Link to='contact' smooth={true}>contact</Link></motion.li>
        <motion.li><li><a href='https://docs.google.com/document/d/1U8jNwJXbAuF6fuRj_4J6ci_c_sG2AR5STjAtpD3tU7k/edit?usp=sharing' target='_blank' rel='noreferrer'>resume</a></li></motion.li>
      </motion.ul>
    </div>
  )
}

export default Nav