// import Contact from "./components/Contact";
// import Experience from "./components/Experience";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Portfolio from "./components/Portfolio";
// import Skills from "./components/Skills";

// export default function App() {
//   return (
//     <>
//       <Navbar/>
//       <Hero/>
//       <Skills/>
//       <Portfolio/>
//       <Experience/>
//       <Contact/>
//       <Footer/>
//     </>
//   )
// }




import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Hero />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

