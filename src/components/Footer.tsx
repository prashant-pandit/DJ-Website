export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-16 bg-[#0d0e0f] border-t border-[#3a4a49]/20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
        <div className="font-sora text-xl md:text-2xl text-[#e3e2e2] uppercase font-bold tracking-tighter">
          VIBE_ARCHITECT
        </div>
        <div className="flex gap-8">
          <a className="text-[#b9cac9]/60 hover:text-[#00fbfb] transition-all font-mono text-xs uppercase tracking-widest" href="#">Instagram</a>
          <a className="text-[#b9cac9]/60 hover:text-[#00fbfb] transition-all font-mono text-xs uppercase tracking-widest" href="#">SoundCloud</a>
          <a className="text-[#b9cac9]/60 hover:text-[#00fbfb] transition-all font-mono text-xs uppercase tracking-widest" href="#">Mixcloud</a>
          <a className="text-[#b9cac9]/60 hover:text-[#00fbfb] transition-all font-mono text-xs uppercase tracking-widest" href="#">Contact</a>
        </div>
        <div className="text-[#c8c6c5]/30 font-mono text-[10px] uppercase tracking-widest">
          © 2024 VIBE ARCHITECT. ALL NIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
