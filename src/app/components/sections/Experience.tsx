"use client";
import { FadeIn } from "../ui/FadeIn";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

// Data: Professional yet honest about your journey
const experienceData = [
  {
    type: "work", // or "education"
    role: "Founder & Lead Developer",
    company: "Keva Agency",
    period: "Jan 2026 - Present",
    description: "Founded a web development agency focusing on high-performance digital solutions for businesses. overseeing full-stack architecture and client delivery."
  },
  {
    type: "work",
    role: "Backend Engineering Intern",
    company: "StartUp Name (Current)", // Replace with actual company
    period: "Nov 2025 - Present", // Replace with actual dates
    description: "Optimizing database queries and maintaining internal tools. Collaborating with senior engineers to implement scalable API endpoints."
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
    company: "GGSIPU",
    period: "2022 - 2026",
    description: "Specializing in Backend Development and System Design. Maintaining a focus on core engineering principles while building practical projects."
  }
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
              {/* Timeline Dot Icon */}
              <div className="absolute -left-3 md:-left-[13px] top-1 bg-background border border-white/20 p-1.5 rounded-full text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                {item.type === "education" ? <GraduationCap size={16} /> : <Briefcase size={16} />}
              </div>

              {/* Content Card */}
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