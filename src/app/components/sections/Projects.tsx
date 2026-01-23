"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Github, ExternalLink, Pause, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "FounderKit (feat. CodeFlow)",
    description: "A modular backend ecosystem for startups. Provides pre-built Auth/Payment microservices (Java Spring Boot) to cut MVP development time by 50%.",
    tags: ["Java Spring Boot", "PostgreSQL", "Microservices"],
    image: "/code.png", 
    links: { github: "https://github.com/Nitish-11k", demo: "https://code-flow-solution.vercel.app/" },
  },
  {
    title: "Keva Agency Platform",
    description: "Lead Full Stack Engineer. Architected a high-performance digital agency platform. Achieved 100/100 Lighthouse SEO scores using Next.js optimization.",
    tags: ["Next.js", "Framer Motion", "SEO"],
    image: "/keva.png", // Ensure this image exists in public folder
    links: { github: "https://github.com/Nitish-11k", demo: "https://www.keva.agency/" },
  },
  {
    title: "SheandSoul App",
    description: "Architected the backend for an AI-driven platform. Reduced latency by 40% using Redis caching and optimized database schema.",
    tags: ["Java Spring Boot", "Supabase", "Redis"],
    image: "/soul.png",
    links: { github: "https://github.com/Nitish-11k", demo: "https://sheandsoul.com" },
  },
  {
    title: "Smart Traffic",
    description: "Real-time violation detection using YOLOv8. Automated evidence logging reduced manual surveillance effort by 60%.", 
    tags: ["Python", "YOLOv8", "Computer Vision"],
    image: "/trafficproject.png", 
    links: { github: "https://github.com/Nitish-11k", demo: null },
  },
  {
    title: "Retro Arcade",
    description: "Gaming platform with secure OAuth. Increased organic traffic by 25% via advanced SEO strategies.",
    tags: ["React.js", "Firebase", "Tailwind"],
    image: "/retroarcade.png",
    links: { github: "https://github.com/Nitish-11k", demo: "https://www.retroarcade.in/" },
  }
];

export default function Projects() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  // Automatic scrolling effect
  useEffect(() => {
    let animationFrameId: number;
    
    const autoScroll = () => {
      if (!isPaused && width > 0) {
        let newX = x.get() - 0.8; // Speed of auto-scroll
        if (newX <= -width) {
          newX = 0; // Reset to start for infinite feel (simplistic)
        }
        x.set(newX);
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [width, isPaused, x]);

  return (
    <section className="py-24 bg-black overflow-hidden" id="projects">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Works</h2>
        <p className="text-gray-400 max-w-xl">
          Swipe to explore. Auto-scrolling active.
        </p>
      </div>

      {/* Carousel Container */}
      <motion.div 
        ref={carousel} 
        className="cursor-grab active:cursor-grabbing overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }} 
          style={{ x }}
          className="flex gap-8 px-6 w-max"
        >
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group relative h-[450px] w-[320px] md:w-[450px] flex-shrink-0 overflow-hidden rounded-3xl bg-surface border border-white/5 hover:border-blue-500/40 transition-all duration-300 shadow-xl"
            >
              {/* Media Layer */}
              <div className="h-[55%] w-full relative overflow-hidden bg-black/40">
                <Image 
                  src={project.image || "/file.svg"} 
                  alt={project.title} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90" />
              </div>

              {/* Text Layer */}
              <div className="p-6 md:p-8 flex flex-col justify-between h-[45%] bg-surface relative z-10">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex justify-between items-end mt-4">
                   <div className="flex flex-wrap gap-2 max-w-[70%]">
                     {project.tags.map(tag => (
                       <span key={tag} className="text-[10px] font-mono px-2 py-1 rounded bg-blue-500/5 text-blue-300 border border-blue-500/10">
                        {tag}
                       </span>
                     ))}
                   </div>
                   <div className="flex gap-3">
                     {project.links.github && (
                       <Link href={project.links.github} target="_blank" className="p-2 bg-white/5 rounded-full text-white hover:bg-blue-600 hover:text-white transition-all">
                         <Github size={18} />
                       </Link>
                     )}
                     {project.links.demo && (
                       <Link href={project.links.demo} target="_blank" className="p-2 bg-white/5 rounded-full text-white hover:bg-blue-600 hover:text-white transition-all">
                         <ExternalLink size={18} />
                       </Link>
                     )}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}