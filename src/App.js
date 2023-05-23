import About from './components/About'
import Contact from './components/Contact'
// import Experience from './components/Experience'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './App.css';
import './styles/styles.css'



function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
