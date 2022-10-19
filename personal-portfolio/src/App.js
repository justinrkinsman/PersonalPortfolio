import './App.css';
import { Navbar } from './components/Header';
import LandingPage from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
