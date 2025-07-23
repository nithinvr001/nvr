import './App.css';
import About from './components/about';
import Contact from './components/contact';
import EduNExp from './components/EduNExp';
import Footer from './components/footer';
import Hero from './components/hero';
import MyWorks from './components/myWork';
import Stats from './components/stats';
import TechStack from './components/tectStack';

function App() {
  return (
    <div className="App">
      <div className='!bg-[#282c34] max-w-[90%] mb-[50px] mx-auto rounded-[30px]'>
        <Hero />
        <About />
        <Stats />
        <TechStack/>
        <MyWorks/>
        <EduNExp/>
        <Contact />
        <Footer />
      </div>


    </div>
  );
}

export default App;
