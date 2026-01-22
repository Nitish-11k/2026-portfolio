"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-background">
      {/* Background Gradient Blob */}
      <div className="absolute top-[-20%] left-[50%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2" />
      
      <div className="container mx-auto px-6 z-10 text-center">
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="inline-block py-1 px-3 rounded-full bg-glass border border-white/10 text-sm text-gray-300 mb-6 backdrop-blur-md"
        >
          Available for Hire
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 tracking-tight"
        >
          Building Scalable <br /> Digital Products.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg text-secondary max-w-2xl mx-auto"
        >
          I help founders and startups build future-proof backend systems and high-performance web applications.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex gap-4 justify-center"
        >
          <button className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
            View Projects <ArrowRight size={18} />
          </button>
          <button className="px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors">
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}