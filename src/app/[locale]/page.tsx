
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects/Projects';
import Services from '../components/Services';
import Skills from '../components/Skills';
 
export default function HomePage() {
  return (
    <div>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
    </div>
)
}