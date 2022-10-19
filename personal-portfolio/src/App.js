import './App.css';
import { Navbar } from './components/Header';
import LandingPage from './components/Home';
import About from './components/About';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About />
      <Experience />
    </div>
  );
}

export default App;
