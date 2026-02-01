import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Education from "./components/Education"
import AboutMe from "./components/AboutMe"
import Skills from "./components/skills"
import Contact from "./components/contact"
import Portfolio from "./components/Portafolio"; 

function App() {
  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen bg-dark bg-scanlines bg-[length:100%_4px]">
        <Navbar />
        <main className="flex-1 flex flex-col pt-34 pb-10 overflow-y-auto">
          <Routes>
            <Route
              path="/"
              element={
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