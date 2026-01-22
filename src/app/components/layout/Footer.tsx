"use client";
import { Github, Linkedin, Twitter } from "lucide-react";

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
    name: "X (Twitter)",
    url: "https://x.com/nitishk0014",
    icon: <Twitter size={20} />,
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