import { FadeIn } from "../ui/FadeIn";
import { Server, Zap, Database } from "lucide-react";

const services = [
  {
    icon: <Server className="w-8 h-8 text-blue-400" />,
    title: "Backend Architecture",
    desc: "Robust, scalable server-side systems designed to handle high traffic and complex logic."
  },
  {
    icon: <Database className="w-8 h-8 text-purple-400" />,
    title: "Database Design",
    desc: "Optimized schemas and queries for speed and data integrity (SQL/NoSQL)."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "API Development",
    desc: "RESTful and GraphQL APIs that serve as the backbone for your mobile and web apps."
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-white mb-12">How I Help Founders</h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-all hover:bg-white/[0.02] group">
              <div className="mb-4 p-3 bg-white/5 w-fit rounded-lg group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
              <p className="text-secondary leading-relaxed">{s.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}