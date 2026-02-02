import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import AboutMe from "./components/AboutMe";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Portfolio from "./components/Portafolio";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="flex flex-col md:flex-row min-h-screen bg-dark">
        <Navbar />
        <main id="scroll-container" className="flex-1 h-screen overflow-y-auto scroll-smooth">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />       
                <AboutMe />     
                <Skills />      
                <Education />   
                <Contact />     
              </>
            }
            />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;