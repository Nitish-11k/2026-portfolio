"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Eye, 
  ScanLine, 
  Wifi, 
  ShieldCheck, 
  Github, 
  Linkedin, 
  Twitter 
} from "lucide-react";

const roles = ["Backend Engineer", "System Architect", "Java Specialist"];

// FIXED: Static values prevent the Hydration Error (Removed Math.random)
const barcodeHeights = [20, 60, 30, 80, 50, 90, 20, 70, 40, 60, 30, 80, 50, 90, 20, 70, 40, 60];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Scroll Handler (Removes # from URL)
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
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

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-20 md:pt-0">
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Side Content */}
        <div className="text-center md:text-left order-2 md:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 mb-6 uppercase tracking-tighter"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for Hire 2026
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-white"
          >
            Nitish <span className="text-neutral-600">Kumar</span>
          </motion.h1>

          <div className="h-10 mb-8 flex justify-center md:justify-start items-center">
            <AnimatePresence mode="wait">
              <motion.h2 
                key={roles[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-2xl md:text-3xl font-mono text-blue-500 uppercase tracking-widest font-bold"
              >
                {roles[index]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed mb-10 text-lg"
          >
            Final-year CSE student building high-performance <span className="text-white">Java Spring Boot</span> backends and distributed systems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a 
              href="#projects" 
              onClick={scrollToProjects}
              className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-xl"
            >
              VIEW WORK <ArrowRight size={18} />
            </a>
            <a href="/NitishResume2026Updated.pdf" target="_blank" className="px-8 py-4 border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              RESUME <Eye size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right Side ID Card */}
        <div className="relative flex justify-center items-center order-1 md:order-2 perspective-1000">
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 140 }}
            className="absolute -top-32 w-[2px] bg-gradient-to-b from-transparent via-neutral-700 to-neutral-400 z-0"
          />

          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="relative group cursor-pointer"
          >
            <div className="relative w-[340px] h-[520px] bg-neutral-900/90 border border-white/20 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              
              <div 
                className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at ${(mouseXSpring.get() + 0.5) * 100}% ${(mouseYSpring.get() + 0.5) * 100}%, rgba(255,255,255,0.12) 0%, transparent 60%)` }}
              />

              <div className="p-8 flex flex-col items-center h-full relative z-20">
                <div className="w-full flex justify-between items-center mb-10">
                  <Wifi size={20} className="text-blue-500 animate-pulse" />
                  <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md text-[10px] text-blue-400 font-mono font-bold tracking-widest">
                    SYSTEM ACCESS: LVL 4
                  </div>
                </div>

                <div className="relative w-36 h-36 mb-6">
                  <div className="absolute inset-0 rounded-full border border-dashed border-blue-500/30 animate-[spin_15s_linear_infinite]" />
                  <div className="absolute inset-4 overflow-hidden rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 shadow-2xl">
                    <ScanLine size={50} className="text-blue-500/40 group-hover:text-blue-400 transition-colors duration-500" />
                  </div>
                  <div className="absolute bottom-1 right-1 w-7 h-7 bg-blue-500 rounded-full border-4 border-neutral-950 flex items-center justify-center shadow-lg">
                    <ShieldCheck size={14} className="text-white" />
                  </div>
                </div>

                <h3 className="text-3xl font-black text-white tracking-tighter uppercase mb-1">
                  Nitish Kumar
                </h3>
                <p className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-8">
                  Backend Engineer
                </p>

                <div className="flex gap-4 mb-10">
                  {[
                    { icon: <Github size={20} />, href: "https://github.com/Nitish-11k" },
                    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/nitish-11k/" },
                    { icon: <Twitter size={20} />, href: "https://www.x.com/nitishk0014" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white/5 border border-white/10 rounded-2xl text-neutral-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/40 transition-all pointer-events-auto"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>

                <div className="w-full flex justify-between items-center p-4 bg-white/[0.03] rounded-2xl border border-white/5 mb-6">
                  <div className="w-12 h-9 bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 rounded shadow-inner flex flex-col gap-1.5 p-2 opacity-90">
                    <div className="h-[1.5px] w-full bg-black/20" />
                    <div className="h-[1.5px] w-full bg-black/20" />
                    <div className="h-[1.5px] w-full bg-black/20" />
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-neutral-500 font-mono uppercase">Node Instance</p>
                    <p className="text-xs text-white font-mono font-bold tracking-tighter">GGSIPU_CSE_2026</p>
                  </div>
                </div>

                <div className="mt-auto w-full pt-4 border-t border-white/5 flex justify-between items-end">
                  <div className="font-mono text-[8px] text-neutral-600 leading-tight">
                    <p>AUTH_TOKEN: ACTIVE</p>
                    <p>REF: JAVA_SPRING_MB</p>
                  </div>
                  
                  {/* FIXED BARCODE */}
                  <div className="flex gap-[2px] h-8 items-end opacity-30">
                    {barcodeHeights.map((h, i) => (
                      <div 
                        key={i} 
                        className="w-[2px] bg-white" 
                        style={{ height: `${h}%` }} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}