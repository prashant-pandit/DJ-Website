import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 relative group"
        >
          <div className="absolute -inset-4 border border-[#00fbfb]/20 group-hover:border-[#00fbfb]/50 transition-all duration-500" />
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU12gSGSCRZpKY-jYpeQ6Vm3l_Mf4iufBRfxGqPAVWt-_yAdv3Ryr2dUmKZ5A_nquv6S-CziZdsaLqxvn5KQ4wG-poG1GWcv175dg26lWFQkvkuL5qC-OBGAAtW5r7FT8ZryluUhsM72gdwYwAPZGAt5pogNL7KEJzL9Z2Fcc9c8iqgUuWuVci6c4-UKT0LL0fQk_2mixrYRAtth_1uuhrGUGZLjS5ClRpZmTaEFeuq4X8xQJy0UkAyjJ3U4fxlzjBtr_UDC7Gaxs"
            alt="Professional DJ"
            className="w-full grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-[4/5]"
          />
          <div className="absolute bottom-4 left-4 bg-[#343535] px-4 py-2 flex items-center gap-2">
            <div className="flex items-end h-5 gap-[2px]">
              <div className="w-[3px] bg-[#00fbfb] animate-[bounce_1s_infinite_0.1s]" />
              <div className="w-[3px] bg-[#00fbfb] animate-[bounce_1s_infinite_0.3s]" />
              <div className="w-[3px] bg-[#00fbfb] animate-[bounce_1s_infinite_0.2s]" />
              <div className="w-[3px] bg-[#00fbfb] animate-[bounce_1s_infinite_0.4s]" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#00fbfb]">LIVE IN LONDON</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-6 md:col-start-7"
        >
          <span className="font-mono text-xs text-[#00fbfb] uppercase tracking-[0.2em] mb-4 block">THE ARCHITECT</span>
          <h2 className="font-sora text-4xl md:text-5xl font-bold mb-8 uppercase leading-tight">A Sonic Masterclass In Professionalism</h2>
          <p className="font-hanken text-lg text-[#b9cac9] mb-6">
            VIBE ARCHITECT isn't just a DJ—it's a bespoke sound experience tailored for the most discerning clients. With a career spanning over a decade in the London and Ibiza circuits, I specialize in crafting atmospheres that transition seamlessly from corporate rigor to high-octane euphoria.
          </p>
          <p className="font-hanken text-lg text-[#b9cac9] mb-8">
            My open-format mastery covers everything from deep melodic house and tech-house to timeless classics, high-energy Top 40, and sophisticated hip-hop. I ensure every beat is felt as much as it is heard.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-[#1a1c1c] border border-[#3a4a49]/20">
              <h4 className="font-mono text-sm text-[#00fbfb] mb-1">EQUIPMENT</h4>
              <p className="font-hanken text-[10px] opacity-70 uppercase tracking-wider">Pioneer CDJ-3000 / DJM-V10</p>
            </div>
            <div className="p-4 bg-[#1a1c1c] border border-[#3a4a49]/20">
              <h4 className="font-mono text-sm text-[#00fbfb] mb-1">REGIONS</h4>
              <p className="font-hanken text-[10px] opacity-70 uppercase tracking-wider">London / Ibiza / Dubai</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
