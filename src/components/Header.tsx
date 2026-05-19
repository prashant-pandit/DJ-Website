import { motion } from "motion/react";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-[#121414]/80 backdrop-blur-xl border-b border-[#3a4a49]/10"
    >
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 max-w-7xl mx-auto">
        <div className="font-sora text-xl md:text-2xl font-bold tracking-tighter text-[#e3e2e2] uppercase">
          VIBE_ARCHITECT
        </div>
        <div className="hidden md:flex gap-8">
          <a className="text-[#00fbfb] font-bold border-b-2 border-[#00fbfb] pb-1 font-mono text-sm" href="#home">Home</a>
          <a className="text-[#b9cac9] font-medium hover:text-[#00fbfb] transition-colors font-mono text-sm" href="#about">About</a>
          <a className="text-[#b9cac9] font-medium hover:text-[#00fbfb] transition-colors font-mono text-sm" href="#services">Services</a>
          <a className="text-[#b9cac9] font-medium hover:text-[#00fbfb] transition-colors font-mono text-sm" href="#media">Media</a>
        </div>
        <a 
          className="bg-[#00fbfb] text-[#002020] px-6 py-2 rounded-none font-mono text-sm font-bold shadow-[0_0_20px_rgba(0,251,251,0.3)] hover:shadow-[0_0_35px_rgba(0,251,251,0.6)] active:scale-95 duration-200 transition-all" 
          href="#booking"
        >
          Book Now
        </a>
      </nav>
    </motion.header>
  );
}
