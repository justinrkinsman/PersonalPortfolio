import './App.css';
import { Navbar } from './components/Header';
import LandingPage from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About />
      <Experience />
      <Projects />
      <Resume />
    </div>
  );
}

export default App;
