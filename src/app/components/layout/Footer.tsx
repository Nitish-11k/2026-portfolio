"use client";
import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Nitish-11k",
    icon: <Github size={20} />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nitish-11k/",
    icon: <Linkedin size={20} />,
  },
  {
    name: "X",
    url: "https://x.com/nitishk0014",
    // Official X Logo SVG
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright / Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-1">Nitish Kumar</h3>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}