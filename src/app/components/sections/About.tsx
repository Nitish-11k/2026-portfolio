import { FadeIn } from "../ui/FadeIn";

export default function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <FadeIn>
          <h2 className="text-sm font-mono text-blue-400 mb-4 tracking-wider uppercase">About Me</h2>
          <p className="text-2xl md:text-3xl font-medium text-white leading-relaxed">
            I am a final-year CSE student and the founder of <span className="text-blue-400">Keva Agency</span>.
            My passion lies in backend engineering—structuring logic, optimizing databases, and deploying scalable systems.
          </p>
          <p className="mt-8 text-secondary text-lg leading-relaxed">
            Beyond the code, I have a deep appreciation for systems and patterns—whether it's architecting a complex 
            microservice or analyzing the geometry of the cosmos. I believe that understanding the underlying structure of things 
            is the key to building resilient solutions.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}