import "./App.css";
import About from "./components/About";
import Blogs from "./components/Blogs";
import { Outlet, useLocation } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

function App() {
  const location = useLocation();

  if (location.pathname !== "/") {
    return (
        <Outlet />
        
    );
  }

  return (
    <div className="bg-[#181818]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Blogs />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
