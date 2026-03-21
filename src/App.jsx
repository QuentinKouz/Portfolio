import { Button } from 'primereact/button';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Projects from './Projects.jsx';
import Skills from './Skills.jsx';
import Contacts from './Contacts.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';

export default function App() {


  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contacts />
      <Footer />
      
    </div>
  )
}