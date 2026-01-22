import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white selection:bg-blue-500/30">
      <Navbar/>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}