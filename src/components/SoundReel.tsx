import { motion } from "motion/react";
import { Play, PlayCircle, ArrowLeft, ArrowRight } from "lucide-react";

const mixes = [
  {
    title: "Sunset Melodic Mix",
    subtitle: "Ibiza Sessions Vol. 12",
    duration: "58:24",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgp6vJ3Apcq72Ob2H3FEwEoRWQDa26fsJhIpbwL06kkfwpd8C9c1zvLBBSPT_QbhRjgke5wFbZil3GSRJH0TipUBMIXNnxq8cX4sfWdkKobNAZPFTcYuBPhu-UCAiSEFYJJQ2GYmMi1Tz0uO3C1FxQ12gzxQQsVNXq2xLijE28G0jpLp6p_NIlBBuTrfLHLLFnSt9MQENhWCBuNHIFEWkR7aOOjO1w09on-mmPD1jJS78w6VDOqgALIa8CpPfsZFf2ADpZJIYHQF8"
  },
  {
    title: "Midnight Tech-House",
    subtitle: "London After Dark Series",
    duration: "62:15",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhdlPrAwWaqAs27Fa_M_pyYNflrJZjEAyxQ20udQw9pQOn0WlfYALJ6VhIWug14S43ucrVR1Y8Tvzv8PswujV4-CD2kWr3ImVuMslJlb3Dhohs_3vpfckYyiagRNV2fUgLK8L92_KlXK1wioZKRmIIyBTtQc68xf9HycvX1BVCszEATMew7_TYjaJkFuzwyAJpWUwwC97sOZY8UlN7pur1hJ0uRD_C99CE6re3G5Ty38ChSfoqzcp2tXau2j5NDjLsCQ1js4BgDfM"
  },
  {
    title: "Open Format Classics",
    subtitle: "Corporate Gala Showcase",
    duration: "45:10",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFFTpirQzrvegSykDL8s8otBduoaTqrdI7zN07FEQmtO-4pr7yHhFXFbXKiLPxOTcvaBYLvtYfy9RZEapiAfRw7rf3AgdZjKAG9Bj-4QxP5FugURVy_9EfLJx9dTvTQxpUQCVoqoz5ZNZF0ApyC6YlAJrRrLQaxFTJ1CNGiH8QHDvL0_05sOdAHeQqV3-tz1FPaQiJW2pOyvPgWg6mC_WSsfDVfnpmayJaR2F6BXynxaOjrpPB5s-9RKubjbxUdAWOAmIUvQs1Rc0"
  }
];

export default function SoundReel() {
  return (
    <section id="media" className="py-24 md:py-40 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-sora text-4xl md:text-5xl font-bold uppercase mb-4">The Sound Reel</h2>
          <p className="text-[#b9cac9] font-hanken text-lg">Listen to the latest live sets to hear how the energy transitions.</p>
        </motion.div>
        <div className="flex gap-4">
          <button className="w-12 h-12 border border-[#3a4a49] flex items-center justify-center hover:bg-[#00fbfb] hover:text-[#002020] transition-all active:scale-90">
            <ArrowLeft size={20} />
          </button>
          <button className="w-12 h-12 border border-[#3a4a49] flex items-center justify-center hover:bg-[#00fbfb] hover:text-[#002020] transition-all active:scale-90">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="aspect-video bg-[#292a2a] relative group cursor-pointer overflow-hidden border border-[#3a4a49]/20 shadow-2xl"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVin7dcfjaBMbKcp_SAZJfCDKNqY5Nu2XbyoPibiBWzEpktL4vnuKEfGiR7q5-8J6DB6Pu21QFuFgK24r0J63upkL2-08I66zopw59hF3WSJqrYi330ozDpd9oLI0dlnXAf20__52cG0L7tQgUNskWgHN3p-QbcagebXFcpNTHu6EfmhIdJEE7kymhdou_qIeNMIL9PwUN8EcJ44JxDfONgXAgWUNc4uq2-KVNe6eqjCJeFiZTFYqChdH6gK2waHR3ag6wXedD0O4"
            alt="Video Reel"
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center bg-[#0c0f0f]/60 backdrop-blur-md group-hover:border-[#00fbfb] transition-colors">
              <Play className="text-white fill-white ml-1" size={40} />
            </div>
          </div>
          <div className="absolute bottom-6 left-6">
            <span className="font-mono text-xs uppercase bg-[#00fbfb] px-3 py-1 text-[#002020] font-bold">Performance Reel 2024</span>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {mixes.map((mix, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1a1c1c] p-6 flex items-center gap-6 border border-[#3a4a49]/10 group cursor-pointer hover:bg-[#1e2020] transition-colors active:scale-[0.99]"
            >
              <div className="w-20 h-20 bg-[#343535] flex-shrink-0 relative overflow-hidden">
                <img src={mix.image} alt={mix.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <PlayCircle className="absolute inset-0 m-auto text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
              </div>
              <div className="flex-grow">
                <h4 className="font-sora text-sm font-semibold uppercase mb-1">{mix.title}</h4>
                <p className="font-hanken text-sm opacity-50">{mix.subtitle}</p>
              </div>
              <div className="font-mono text-xs opacity-30">{mix.duration}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
