import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The dance floor was packed from the first song to the very last encore. Incredibly professional, he knew exactly how to read the room and build the energy.",
    author: "Sarah M.",
    role: "Corporate Planner, London"
  },
  {
    quote: "A true master of the open-format craft. Our luxury wedding needed someone who could play Sinatra and Tech-House with equal finesse—he delivered perfectly.",
    author: "James & Emma",
    role: "Private Client, Ibiza"
  },
  {
    quote: "Impeccable technical skills and a professional attitude that is hard to find in the nightlife scene. He's our first call for every major guest spot.",
    author: "Marcus V.",
    role: "Nightclub Owner, Soho"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-[#0d0e0f] py-24 md:py-40 px-6 md:px-16 border-t border-[#3a4a49]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col ${index !== 0 ? 'border-l border-[#3a4a49]/20 md:pl-12' : ''}`}
            >
              <Quote className="text-[#00fbfb] mb-6 fill-[#00fbfb]" size={32} />
              <p className="font-hanken text-lg text-[#e3e2e2] mb-6 leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="mt-auto">
                <div className="font-sora text-sm font-bold uppercase tracking-wider">{t.author}</div>
                <div className="font-mono text-xs text-[#b9cac9]">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
