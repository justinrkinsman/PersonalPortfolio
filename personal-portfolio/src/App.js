import './App.css';
import { Navbar } from './components/Header';
import LandingPage from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <About />
    </div>
  );
}

export default App;
