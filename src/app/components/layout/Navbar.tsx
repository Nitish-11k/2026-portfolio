"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", id: "about" },
  // { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll without adding # to URL
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 bg-background/80 backdrop-blur-lg border-b border-white/5" : "py-6 bg-transparent"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <motion.button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold tracking-tighter text-white"
          whileHover={{ scale: 1.05 }}
        >
          NITISH<span className="text-blue-500">.</span>
        </motion.button>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={(e: any) => scrollToSection(e, "contact")}
            className="px-5 py-2 bg-blue-600 text-white text-xs font-bold rounded-full hover:bg-blue-500 transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          >
            HIRE ME
          </button>
        </div>
      </div>
    </nav>
  );
}