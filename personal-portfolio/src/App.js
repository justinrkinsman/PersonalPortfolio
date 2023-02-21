import './App.css';
import { Navbar } from './components/Header';
import LandingPage from './components/Home';
import { About } from './components/About';
import { Experience } from './components/Experience';
import Projects from './components/Projects';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Link, Route, Routes } from 'react-router-dom'
import { ProjectsPage } from './components/AllProjects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <LandingPage />
        <About />
        <Experience />
        <Projects />
        <Routes>
          <Route path='/all-projects' element={<ProjectsPage />} />
        </Routes>
        <Link to='/all-projects'>All Projects</Link>
        <Resume />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;