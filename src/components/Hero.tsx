import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section id="home" ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAplTKOxPX9uZzUaeRy1Vk284GGiPnlpII3stIqrhpuPtNejLNdYOFEtq7oar_gTACKEjKCmu7MU83ivnE-nVXihsvAPyH6RD7hJCJc9mzQUzc-AOCkPw_CJJO_yuq7Uven8IJBEaM5oqh25D8wJTmVmySnxf7PUZxW4EQMwnQYmsI43Izm8Q389F5uJ6Ztdrexsnn0AyR2mkMD-HU4RfVSR9-nJA12Wqv7X6gSi2TBfpmM_q2cipGSZn80UQJXz-HX8MAVtQCzilM"
          alt="Vibe Architect Performance"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#0d0e0f]" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sora text-5xl md:text-8xl leading-tight mb-6 uppercase font-extrabold tracking-tighter"
        >
          VIBE ARCHITECT <br /> 
          <span className="text-[#00fbfb] drop-shadow-[0_0_15px_rgba(0,251,251,0.5)]">PREMIUM OPEN-FORMAT DJ</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-hanken text-lg md:text-xl text-[#b9cac9] mb-10 max-w-2xl mx-auto"
        >
          Elevating luxury weddings, corporate events, and nightlife experiences across London & Ibiza.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <a 
            className="bg-[#00fbfb] text-[#002020] font-mono text-sm px-10 py-4 font-bold uppercase tracking-widest hover:brightness-110 shadow-[0_0_20px_rgba(0,251,251,0.3)] transition-all active:scale-95" 
            href="#booking"
          >
            Check Availability
          </a>
          <a 
            className="border border-[#e3e2e2] text-[#e3e2e2] font-mono text-sm px-10 py-4 font-bold uppercase tracking-widest hover:bg-[#e3e2e2] hover:text-[#121414] transition-all active:scale-95" 
            href="#media"
          >
            Listen to Mixes
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
