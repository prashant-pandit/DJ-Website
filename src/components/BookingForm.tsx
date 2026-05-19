import { motion } from "motion/react";

export default function BookingForm() {
  return (
    <section id="booking" className="py-24 md:py-40 px-6 md:px-16 bg-[#0d0e0f]">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-[#121414]/60 backdrop-blur-xl p-12 md:p-20 border border-[#3a4a49]/20 relative shadow-2xl"
      >
        <div className="text-center mb-16">
          <h2 className="font-sora text-4xl md:text-5xl font-bold uppercase mb-4">Secure Your Date</h2>
          <p className="text-[#b9cac9] font-hanken text-lg">Provide your event details for a bespoke sonic architectural proposal.</p>
        </div>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs uppercase tracking-widest text-[#b9cac9]">Name</label>
            <input 
              type="text" 
              className="bg-transparent border-0 border-b border-[#3a4a49]/40 focus:ring-0 focus:border-[#00fbfb] px-0 py-3 text-[#e3e2e2] transition-all placeholder:opacity-30 outline-none" 
              placeholder="John Doe" 
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs uppercase tracking-widest text-[#b9cac9]">Event Date</label>
            <input 
              type="date" 
              className="bg-transparent border-0 border-b border-[#3a4a49]/40 focus:ring-0 focus:border-[#00fbfb] px-0 py-3 text-[#e3e2e2] transition-all outline-none [color-scheme:dark]" 
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs uppercase tracking-widest text-[#b9cac9]">Event Type</label>
            <select className="bg-transparent border-0 border-b border-[#3a4a49]/40 focus:ring-0 focus:border-[#00fbfb] px-0 py-3 text-[#e3e2e2] appearance-none cursor-pointer transition-all outline-none">
              <option className="bg-[#1e2020]">Corporate Event</option>
              <option className="bg-[#1e2020]">Luxury Wedding</option>
              <option className="bg-[#1e2020]">Nightlife / Guest Spot</option>
              <option className="bg-[#1e2020]">Private Gala</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs uppercase tracking-widest text-[#b9cac9]">Venue & Location</label>
            <input 
              type="text" 
              className="bg-transparent border-0 border-b border-[#3a4a49]/40 focus:ring-0 focus:border-[#00fbfb] px-0 py-3 text-[#e3e2e2] transition-all placeholder:opacity-30 outline-none" 
              placeholder="The Shard, London" 
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="font-mono text-xs uppercase tracking-widest text-[#b9cac9]">Guest Count & Requirements</label>
            <textarea 
              className="bg-transparent border-0 border-b border-[#3a4a49]/40 focus:ring-0 focus:border-[#00fbfb] px-0 py-3 text-[#e3e2e2] transition-all placeholder:opacity-30 outline-none resize-none" 
              placeholder="Approx 250 guests, full audio and lighting package required..." 
              rows={3}
            />
          </div>
          <div className="md:col-span-2 flex justify-center mt-6">
            <button 
              type="submit"
              className="bg-[#00fbfb] text-[#002020] font-sora text-xl px-16 py-6 font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,251,251,0.3)] hover:shadow-[0_0_35px_rgba(0,251,251,0.6)] hover:brightness-110 active:scale-95 transition-all w-full md:w-auto"
            >
              Request a Custom Quote
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
