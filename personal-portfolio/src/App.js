import './App.css';
import { Navbar } from './components/Header';
import LandingPage from './components/Home';
import { About } from './components/About';
import { Experience } from './components/Experience';
import Projects from './components/Projects';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <LandingPage />
        <About />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

const header = document.getElementsByClassName('header')
const emptyHeader = document.getElementsByClassName('stickyHeader')

window.onscroll = function () {
  stickyHeader()
}

function stickyHeader() {
  for ( let i = 0; i < header.length; i++){
    if ((window.pageYOffset + 50) > header[i].offsetTop) {
      //console.log(header[i])
      header[i].classList.add('stickyHeader')
    }
    if ((window.pageYOffset < emptyHeader[i].offsetTop)) {
      header[i].classList.remove('stickyHeader')
    }
  }
}

export default App;

/*export function stickyHeader(header, emptyHeader) {
    let sticky = header.offsetTop
    let empty = emptyHeader.offsetTop
   // console.log(sticky)
    console.log(window.pageYOffset)
    if ((window.pageYOffset + 50) > sticky){
        header.classList.add('stickyHeader')
        console.log('stick')
        }
    if (window.pageYOffset < empty) {
        header.classList.remove('stickyHeader')
        console.log('unstick')
        }
} */