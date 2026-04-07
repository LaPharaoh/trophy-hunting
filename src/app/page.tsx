"use client";

import { motion } from "framer-motion";
import { Trophy, ShieldCheck, Zap, Ghost, Monitor, Target, Layers } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-brand/30">
      
      {/* 1. Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xl font-bold tracking-wide">
            <Trophy className="text-brand w-6 h-6" />
            AchievementForge
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#about" className="hover:text-white transition">The Vision</a>
          </div>
          <Link href="/dashboard" className="bg-brand hover:bg-brand-light text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(0,111,205,0.4)] transition-all cursor-pointer">
            Sign In
          </Link>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <div className="w-full px-4 sm:px-6 pt-32 pb-12 max-w-[1400px] mx-auto">
        <section className="relative w-full aspect-video min-h-[650px] max-h-[850px] rounded-[2rem] overflow-hidden flex items-center bg-[#0a0a0a] shadow-2xl border border-white/5">
          {/* Full-width Background Image */}
          <div className="absolute inset-0 z-0">
            <img src="/hero-bg.jpg" alt="Hero background" className="w-full h-full object-cover object-right md:object-center" />
          </div>
          {/* Gradient shadow for text readability on left */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />

          <div className="w-full px-8 md:px-16 lg:px-20 flex flex-col items-start relative z-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-light mb-8 backdrop-blur-md">
                <SparklesIcon className="w-3.5 h-3.5" /> Next-Gen Trophy Tracking
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 drop-shadow-xl text-white">
                The definitive platform for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-blue-200 to-white">Trophy Hunters.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-medium filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-xl">
                Stop losing track of missables in scattered forum threads. Unite your PlayStation, Steam, and Xbox progress in one intelligent, universally synced dashboard.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
                <Link href="/dashboard" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-brand rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(0,111,205,0.5)]">
                   <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                   <span className="relative flex items-center gap-2">Start Forging <Zap className="w-4 h-4 fill-current" /></span>
                </Link>
                <a href="#features" className="px-8 py-4 font-bold text-gray-200 bg-black/40 hover:bg-black/60 shadow-xl backdrop-blur-sm border border-white/10 rounded-full transition-all flex items-center gap-2">
                  Explore Features
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* 3. Social Proof / Rare Showcase Scroller */}
      <section className="py-10 border-y border-[#222] bg-[#111] overflow-hidden whitespace-nowrap flex relative">
         <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-[#111] to-transparent z-10" />
         <div className="absolute right-0 w-32 h-full bg-gradient-l from-[#111] to-transparent z-10" />
         <motion.div 
           animate={{ x: [0, -1035] }}
           transition={{ ease: "linear", duration: 20, repeat: Infinity }}
           className="flex gap-10 items-center justify-start opacity-50 px-10"
         >
           {/* Duplicating the array items a few times for continuous scroll effect */}
           {[...Array(3)].map((_, i) => (
             <div key={i} className="flex gap-16 items-center">
                <span className="text-xl font-bold flex items-center gap-3"><Monitor className="w-6 h-6"/> PlayStation Network</span>
                <span className="text-xl font-bold flex items-center gap-3"><Ghost className="w-6 h-6"/> Steam API Sync</span>
                <span className="text-xl font-bold flex items-center gap-3"><Target className="w-6 h-6"/> Xbox Live Integration</span>
                <span className="text-xl font-bold flex items-center gap-3"><ShieldCheck className="w-6 h-6"/> Verified 100% Guides</span>
             </div>
           ))}
         </motion.div>
      </section>

      {/* 4. Core Features Showcase */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Built strictly for Completionists.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We analyzed everything wrong with legacy tracking sites and built exactly what the community actually needs to succeed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-panel p-8 rounded-3xl border border-[#333] hover:border-brand/50 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />
            <Layers className="w-12 h-12 text-brand mb-6 relative z-10" />
            <h3 className="text-2xl font-bold mb-3 relative z-10">Smart UGC Guides</h3>
            <p className="text-gray-400 leading-relaxed relative z-10">Stop manually scrolling via Ctrl+F. Our community roadmaps sync with your account API and dynamically grey out trophies the exact second you earn them.</p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-panel p-8 rounded-3xl border border-[#333] hover:border-brand/50 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />
            <Monitor className="w-12 h-12 text-brand mb-6 relative z-10" />
            <h3 className="text-2xl font-bold mb-3 relative z-10">Universal Identity</h3>
            <p className="text-gray-400 leading-relaxed relative z-10">Merge your Steam, Xbox, and PlayStation accounts into a single elite profile showcase. Assert your dominance across all major platforms simultaneously.</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-panel p-8 rounded-3xl border border-[#333] hover:border-brand/50 transition-colors group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-bl-full -z-0 transition-transform group-hover:scale-110" />
            <ShieldCheck className="w-12 h-12 text-brand mb-6 relative z-10" />
            <h3 className="text-2xl font-bold mb-3 relative z-10">Missable Alerts</h3>
            <p className="text-gray-400 leading-relaxed relative z-10">Our dashboard automatically senses the games you are playing and flashes a highly visible warning before you hit a point-of-no-return.</p>
          </motion.div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="border-t border-[#222] bg-[#0a0a0a] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-xl font-bold text-gray-500">
            <Trophy className="w-5 h-5 text-[#555]" />
            AchievementForge
          </div>
          <p className="text-sm text-gray-600">Built strictly for completionists. Not affiliated with Sony, Microsoft, or Valve.</p>
        </div>
      </footer>

    </div>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
