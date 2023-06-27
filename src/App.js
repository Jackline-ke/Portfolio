import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
 
  return (
    <div className="bg-black bg-no-repeat bg-cover overflow-hidden text-black">
      <Header />
      <Banner />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
  );
}

export default App;
