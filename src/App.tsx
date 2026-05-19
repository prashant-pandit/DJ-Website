/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import SoundReel from "./components/SoundReel";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0e0f] selection:bg-[#00fbfb] selection:text-[#002020]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <SoundReel />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />

      {/* Mobile Booking Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[#1a1c1c]/90 backdrop-blur-md border-t border-[#3a4a49]/20 z-50 px-6 py-4 flex justify-between items-center">
        <div>
          <span className="font-mono text-[10px] uppercase block opacity-60">Availability</span>
          <span className="font-mono text-xs text-[#00fbfb] font-bold">DEC 2024 OPEN</span>
        </div>
        <a 
          className="bg-[#00fbfb] text-[#002020] px-6 py-2 font-bold uppercase tracking-widest font-mono text-xs shadow-[0_0_15px_rgba(0,251,251,0.3)]" 
          href="#booking"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
