"use client";
import { FadeIn } from "../ui/FadeIn";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

const experienceData = [
  {
    type: "work",
    role: "Backend Engineer",
    company: "SheandSoul (Remote)",
    period: "June 2025 – Dec 2025",
    description: "Architected a scalable Microservices architecture using Java Spring Boot and Supabase. Engineered an AI-driven support system reducing query resolution time by 70%, and optimized API latency by 40% using Redis caching." 
    // [cite: 8, 9, 10, 11, 12, 13, 15]
  },
  {
    type: "project", // Change type from 'work' to 'project' or keep 'work' but change role
    role: "Lead Full Stack Engineer", 
    company: "Keva Agency (Project)",
    period: "Jan 2026 - Present",
    description: "Architected a high-performance digital agency platform using Next.js and Framer Motion. Focused on SEO optimization, component reusability, and deploying scalable frontend architecture."
  },
  {
    type: "project",
    role: "Creator",
    company: "FounderKit",
    period: "Dec 2025 - Present",
    description: "Developing a comprehensive backend starter kit (Auth, Payments, User Profiles) to help founders launch MVPs 50% faster."
  },
  {
    type: "education",
    role: "B.Tech in Computer Science",
    company: "GGSIPU (Delhi Technical Campus)",
    period: "Expected May 2026",
    description: "Final Year Student. Specializing in Backend Development, System Design, and Distributed Systems." 
    // [cite: 4, 5, 6]
  },
];

export default function Experience() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn>
          <h2 className="text-3xl font-bold text-white mb-16 text-center">My Journey</h2>
        </FadeIn>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
          {experienceData.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1} className="relative pl-8 md:pl-12">
              <div className="absolute -left-3 md:-left-[13px] top-1 bg-background border border-white/20 p-1.5 rounded-full text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                {item.type === "education" ? <GraduationCap size={16} /> : <Briefcase size={16} />}
              </div>

              <div className="group relative bg-surface/50 border border-white/5 p-6 rounded-xl hover:bg-white/5 hover:border-white/10 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.role}
                    </h3>
                    <span className="text-sm font-medium text-gray-400 block mt-1">
                      {item.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mt-2 md:mt-0 bg-white/5 px-2 py-1 rounded">
                    <Calendar size={12} />
                    {item.period}
                  </div>
                </div>
                
                <p className="text-secondary text-sm leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}