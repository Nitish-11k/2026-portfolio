"use client";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "FounderKit",
    description: "A comprehensive backend starter kit for startups. Modular authentication and payment systems. [cite: 16]",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    image: "/code.png", 
    links: { github: "https://github.com/Nitish-11k", demo: "https://code-flow-solution.vercel.app/" },
  },
  {
    title: "SheandSoul App",
    description: "Microservices architecture using Java Spring Boot and Supabase. [cite_start]Optimized latency by 40%. [cite: 12, 15]",
    tags: ["Microservices", "Redis", "Supabase"],
    image: "/soul.png",
    links: { github: "https://github.com/Nitish-11k", demo: "https://sheandsoul.com" },
  },
  {
    title: "Smart Traffic",
    description: "Real-time violation detection using YOLOv8. [cite_start]Automated evidence logging reduced effort by 60%. [cite: 18, 19]", 
    tags: ["Java", "Python", "YOLOv8"],
    image: "/trafficproject.png", 
    links: { github: "https://github.com/Nitish-11k", demo: null },
  },
  {
    title: "Retro Arcade",
    description: "Gaming platform with OAuth and SEO strategies. [cite_start]Increased organic traffic by 25%. [cite: 25, 27]",
    tags: ["React.js", "Firebase", "Tailwind"],
    image: "/retroarcade.png",
    links: { github: "https://github.com/Nitish-11k", demo: "https://www.retroarcade.in/" },
  },
  {
    title: "Keva Agency Platform",
    description: "High-performance digital agency platform using Next.js and Framer Motion. Focused on SEO optimization and component reusability.",
    tags: ["Next.js", "Framer Motion", "SEO"],
    image: "/keva.png",
    links: { github: "https://github.com/Nitish-11k", demo: "https://WWW.keva.agency/" },
  },
];

export default function Projects() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Adjusted container height to 200vh to reduce excessive dead space
  const { scrollYProgress } = useScroll({ 
    target: targetRef,
    offset: ["start start", "end end"]
  });
  
  // Horizontal scroll: adjusts how far the cards move based on project count
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);
  const springX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-black" id="projects">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Section Header */}
        <div className="container mx-auto px-6 absolute top-12 md:top-20 z-10 pointer-events-none">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Selected Works</h2>
          <p className="text-blue-500 font-mono text-sm tracking-widest uppercase italic">
            Scroll to explore Projects —&gt;
          </p>
        </div>

        {/* Horizontal Moving Container */}
        <motion.div style={{ x: springX }} className="flex gap-10 px-6 md:px-20 mt-20">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group relative h-[420px] w-[320px] md:w-[480px] flex-shrink-0 overflow-hidden rounded-2xl bg-surface border border-white/5 hover:border-blue-500/40 transition-all duration-500 shadow-2xl"
            >
              {/* Media Layer (60% Height) */}
              <div className="h-[60%] w-full relative overflow-hidden bg-black/40">
                <Image 
                  src={project.image || "/file.svg"} 
                  alt={project.title} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
              </div>

              {/* Text Layer (40% Height) */}
              <div className="p-6 md:p-8 flex flex-col justify-between h-[40%] bg-surface">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                   {/* Tags */}
                   <div className="flex gap-2">
                     {project.tags.slice(0, 3).map(tag => (
                       <span 
                        key={tag} 
                        className="text-[9px] md:text-[10px] font-mono px-2 py-1 rounded bg-blue-500/5 text-blue-400 border border-blue-500/10"
                       >
                        {tag}
                       </span>
                     ))}
                   </div>

                   {/* External Links */}
                   <div className="flex gap-4">
                     {project.links.github && (
                       <Link href={project.links.github} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                         <Github size={18} />
                       </Link>
                     )}
                     {project.links.demo && (
                       <Link href={project.links.demo} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                         <ExternalLink size={18} />
                       </Link>
                     )}
                   </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Spacer at the end to prevent the last card from cutting off */}
          <div className="w-[100px] flex-shrink-0" />
        </motion.div>
      </div>
    </section>
  );
}