import { motion } from "motion/react";
import { Briefcase, Heart, Moon } from "lucide-react";

const services = [
  {
    title: "Corporate Galas",
    description: "From sleek curated background vibes for networking to high-energy afterparties for brand launches. Professional, punctual, and precise.",
    icon: Briefcase
  },
  {
    title: "Luxury Weddings",
    description: "Custom soundtracks from the first aisle walk to the final encore. We curate a musical narrative that reflects your unique story.",
    icon: Heart
  },
  {
    title: "Nightlife Spots",
    description: "High-energy house, tech-house, and open-format guest spots for elite clubs. Driving the dance floor with infectious energy.",
    icon: Moon
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0d0e0f] py-24 md:py-40 px-6 md:px-16 border-y border-[#3a4a49]/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sora text-4xl md:text-5xl font-bold uppercase mb-4"
          >
            Curated Experiences
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#b9cac9] font-hanken text-lg"
          >
            Precision sound for every high-stakes environment.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#1e2020] border border-[#3a4a49]/20 p-10 hover:border-[#00fbfb] transition-all duration-300 relative overflow-hidden active:scale-[0.98]"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                <service.icon size={96} />
              </div>
              <service.icon className="text-[#00fbfb] mb-6" size={40} />
              <h3 className="font-sora text-2xl font-semibold mb-4 uppercase">{service.title}</h3>
              <p className="font-hanken text-[#b9cac9] mb-6">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
