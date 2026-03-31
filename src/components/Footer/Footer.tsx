const Footer = () => {
  return (
    <footer className="bg-[#0c0e12] w-full py-12 px-8 border-t border-[#46484d]/20">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-full mx-auto">
        <div className="text-[#81ecff] flex gap-1.5 items-center font-bold font-headline mb-4 md:mb-0 uppercase tracking-tighter">
          Ragul
          <span className="material-symbols-outlined text-[#81ecff] hover:bg-[#1d2025] transition-all duration-300 rounded-lg active:scale-95">
            terminal
          </span>
        </div>
        <div className="flex space-x-8 mb-8 md:mb-0">
          <a
            className="font-['Inter'] text-[10px] tracking-[0.05em] uppercase text-[#46484d] hover:text-[#81ecff] transition-colors"
            href="#"
          >
            GitHub
          </a>
          <a
            className="font-['Inter'] text-[10px] tracking-[0.05em] uppercase text-[#46484d] hover:text-[#81ecff] transition-colors"
            href="#"
          >
            LinkedIn
          </a>
        </div>
        <div className="font-['Inter'] text-[10px] tracking-[0.05em] uppercase text-[#aaabb0]">
          © 2026 Ragul // ENGINEERED FOR PERFORMANCE
        </div>
      </div>
    </footer>
  );
};

export default Footer;
