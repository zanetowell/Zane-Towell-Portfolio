import React from 'react'
import { Link } from 'react-scroll'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/nav.css'


// const Nav = () => {
  
//   return (
//     <div className='nav'>
//       <h1 className='nav-name'>Zane Towell</h1>
//       <motion.ul className='nav-list'>
//         <motion.li><Link to='about-me' smooth={true}>about</Link></motion.li>
//         <motion.li><Link to='skills' smooth={true}>skills</Link></motion.li>
//         <motion.li><Link to='projects' smooth={true}>projects</Link></motion.li>
//         <motion.li><Link to='contact' smooth={true}>contact</Link></motion.li>
//         <motion.li><li><a href='https://docs.google.com/document/d/1U8jNwJXbAuF6fuRj_4J6ci_c_sG2AR5STjAtpD3tU7k/edit?usp=sharing' target='_blank' rel='noreferrer'>resume</a></li></motion.li>
//       </motion.ul>
//     </div>
//   ) 
// }


function MyNav() {
  return (
    <Navbar bg="white" variant='light' expand="lg" fixed='top' id='myNav'>
      <Container>
        <Navbar.Brand>Zane Towell</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='about-me' >about</Link></Nav.Link>
            <Nav.Link><Link to='skills' >skills</Link></Nav.Link>
            <Nav.Link><Link to='projects' >projects</Link></Nav.Link>
            <Nav.Link><Link to='contact' >contact</Link></Nav.Link>
            <Nav.Link href='https://docs.google.com/document/d/1U8jNwJXbAuF6fuRj_4J6ci_c_sG2AR5STjAtpD3tU7k/edit?usp=sharing' target='_blank' rel='noreferrer'>resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default MyNav