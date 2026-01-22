"use client";
import { FadeIn } from "../ui/FadeIn";
import { Github, ExternalLink, Code2, FolderGit2 } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "FounderKit",
    description: "A comprehensive backend starter kit for startups. Modular authentication, payment integration (Stripe/Razorpay), and user management systems pre-configured for rapid MVP deployment.",
    tags: ["Java Spring Boot", "Next.js", "PostgreSQL", "Docker"],
    // If the repo is private, you can remove the 'github' property
    links: {
      github: "https://github.com/Nitish-11k", 
      demo: "#", // Add live link if available
    },
    featured: true,
  },
  {
    title: "Keva Agency",
    description: "The official platform for my web development agency. Built for high conversion with advanced animations, SEO-optimized structure, and a performant component architecture.",
    tags: ["Next.js", "React", "Framer Motion", "Tailwind"],
    links: {
      github: "https://github.com/Nitish-11k",
      demo: "https://keva.agency", // Assuming this will be the domain
    },
    featured: false,
  },
  {
    title: "Travel Management System",
    description: "A full-stack booking platform handling complex user itineraries. Features secure REST APIs, role-based access control, and real-time booking status updates.",
    tags: ["Java Spring Boot", "React", "MySQL", "Hibernate"],
    links: {
      github: "https://github.com/Nitish-11k", // Replace with specific repo if public
      demo: null,
    },
    featured: false,
  }
];

export default function Projects() {
  return (
    <section className="py-24 bg-black" id="projects">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Works</h2>
              <p className="text-secondary max-w-xl">
                A selection of systems and products I've engineered. Focusing on scalability and clean architecture.
              </p>
            </div>
            <Link 
              href="https://github.com/Nitish-11k" 
              target="_blank"
              className="hidden md:flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              View all on GitHub <Github size={16} />
            </Link>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group h-full bg-surface border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] flex flex-col">
                
                {/* Project Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-lg text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-all">
                    {project.featured ? <Code2 size={24} /> : <FolderGit2 size={24} />}
                  </div>
                  <div className="flex gap-3">
                    {project.links.github && (
                      <Link href={project.links.github} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={20} />
                      </Link>
                    )}
                    {project.links.demo && (
                      <Link href={project.links.demo} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {/* Mobile "View All" Button */}
        <div className="mt-12 text-center md:hidden">
          <Link 
            href="https://github.com/Nitish-11k"
            target="_blank" 
            className="inline-flex items-center gap-2 text-white border border-white/20 px-6 py-3 rounded-lg hover:bg-white/5"
          >
            View all on GitHub <Github size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}