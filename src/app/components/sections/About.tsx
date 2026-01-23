"use client";
import { FadeIn } from "../ui/FadeIn";
import { motion } from "framer-motion";
import { Code2, Database, Globe, Cpu, Server, Terminal, TrendingUp } from "lucide-react";

const skills = [
  { name: "Java (Advanced)", icon: <Code2 size={16} />, color: "text-orange-500" },
  { name: "Spring Boot", icon: <Server size={16} />, color: "text-green-500" },
  { name: "Microservices", icon: <Cpu size={16} />, color: "text-blue-400" },
  { name: ".NET", icon: <Code2 size={16} />, color: "text-blue-500" },
  { name: "Redis", icon: <Terminal size={16} />, color: "text-red-500" },
  { name: "System Design", icon: <Globe size={16} />, color: "text-purple-400" },
];

const growthData = [
  { year: "2022", value: 25, label: "DSA & Logic" },
  { year: "2023", value: 45, label: "Full Stack" },
  { year: "2024", value: 65, label: "Backend Dev" },
  { year: "2025", value: 85, label: "Microservices" },
  { year: "2026", value: 100, label: "Architecture" },
];

export default function About() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="about">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* LEFT SIDE: TEXT CONTENT */}
          <div className="md:w-3/5 text-left">
            <FadeIn>
              <h2 className="text-sm font-mono text-blue-500 mb-4 tracking-widest uppercase">
                01. About Me
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Engineering Scalable <br /> 
                <span className="text-gray-500">Backend Ecosystems.</span>
              </h3>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-8">
                <p>
                  I am a final-year CSE student at <span className="text-white">GGSIPU</span> with a core focus on building resilient, high-performance server-side architectures. 
                </p>
                <p>
                  My experience at <span className="text-white">SheandSoul</span> involved architecting microservices and optimizing API latency by <span className="text-blue-400 font-mono">40%</span> using Redis caching.
                </p>
              </div>

              {/* CENTERED & TIGHT GRAPH SECTION */}
              <div className="mt-12 w-full max-w-lg mx-auto">
                <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
                  <TrendingUp className="text-blue-500" size={18} />
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Growth Trajectory</span>
                </div>

                {/* The Graph Container */}
                <div className="h-64 flex items-end justify-center gap-1 relative px-4">
                  
                  {/* Background Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10 z-0">
                    <div className="w-full h-[1px] bg-white/20" />
                    <div className="w-full h-[1px] bg-white/20" />
                    <div className="w-full h-[1px] bg-white/20" />
                    <div className="w-full h-[1px] bg-white/20" />
                  </div>

                  {growthData.map((item, i) => (
                    <div key={item.year} className="flex-1 flex flex-col items-center justify-end h-full group relative z-10">
                      
                      {/* Hover Tooltip */}
                      <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap pointer-events-none shadow-[0_0_15px_rgba(37,99,235,0.6)]">
                        {item.label}
                      </div>

                      {/* The Bar */}
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                        className="w-full bg-gradient-to-t from-blue-900/10 via-blue-600/20 to-blue-500/40 relative rounded-t-sm border-t border-blue-400/50 hover:to-blue-400/60 transition-colors"
                      >
                        {/* Top Glow Line */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,1)]" />
                      </motion.div>

                      {/* Year Label */}
                      <span className="text-[10px] font-mono text-gray-500 mt-3 group-hover:text-blue-400 transition-colors">
                        {item.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </FadeIn>
          </div>

          {/* RIGHT SIDE: TECH STACK GRID */}
          <div className="md:w-2/5 w-full">
            <FadeIn delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                    className="p-4 rounded-xl border border-white/5 bg-surface/50 backdrop-blur-sm flex flex-col gap-3 transition-colors hover:border-blue-500/30"
                  >
                    <div className={`${skill.color} bg-white/5 w-fit p-2 rounded-lg`}>
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 p-4 rounded-xl border border-white/5 bg-blue-500/5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase text-blue-400 font-bold tracking-tighter">Current Status</p>
                  <p className="text-xs text-white font-mono uppercase">Open to Work</p>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-2 h-2 rounded-sm bg-blue-500 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}