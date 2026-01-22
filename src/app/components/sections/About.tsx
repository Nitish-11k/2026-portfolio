"use client";
import { FadeIn } from "../ui/FadeIn";
import { motion } from "framer-motion";
import { Code2, Database, Globe, Cpu, Server, Terminal } from "lucide-react";

const skills = [
  { name: "Java (Advanced)", icon: <Code2 size={16} />, color: "text-orange-500" },
  { name: "Spring Boot", icon: <Server size={16} />, color: "text-green-500" },
  { name: "Microservices", icon: <Cpu size={16} />, color: "text-blue-400" },
  { name: ".NET", icon: <Code2 size={16} />, color: "text-blue-500" },
  { name: "Redis", icon: <Terminal size={16} />, color: "text-red-500" },
  { name: "System Design", icon: <Globe size={16} />, color: "text-purple-400" },
];

export default function About() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="about">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
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
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  I am a final-year CSE student at <span className="text-white">GGSIPU</span> with a core focus on building resilient, high-performance server-side architectures. 
                </p>
                <p>
                  My experience at <span className="text-white">SheandSoul</span> involved architecting microservices and optimizing API latency by <span className="text-blue-400 font-mono">40%</span> using Redis caching and database indexing. I thrive at the intersection of complex logic and system efficiency.
                </p>
                <p>
                  I don't just write code; I design systems that solve problems—whether it's an AI-driven support bot reducing MTTR by <span className="text-blue-400 font-mono">70%</span> or real-time traffic enforcement systems.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT SIDE: TECH STACK GRID (Visual Enhancement) */}
          <div className="md:w-2/5 w-full">
            <FadeIn delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
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
              
              {/* Optional: GitHub Contribution Style box */}
              <div className="mt-6 p-4 rounded-xl border border-white/5 bg-blue-500/5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase text-blue-400 font-bold tracking-tighter">Status</p>
                  <p className="text-xs text-white font-mono uppercase">Optimizing Production</p>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((i) => (
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