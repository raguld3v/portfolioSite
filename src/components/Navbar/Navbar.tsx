import { useEffect, useRef, useState } from "react";
import { usePortfolio } from "../../hooks/usePortfolio";

const Navbar = () => {
  const { data, loading } = usePortfolio();

  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isAutoScrolling = useRef(false);
  const scrollTimeout = useRef<number | null>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      setActiveSection(id);
      setIsMenuOpen(false);

      isAutoScrolling.current = true;

      const navHeight = 90;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });

      if (scrollTimeout.current) {
        window.clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = window.setTimeout(() => {
        isAutoScrolling.current = false;
      }, 800); // adjust if scroll distance is long
    }
  };

  useEffect(() => {
    if (!data?.navItems?.length) return;

    const handleScroll = () => {
      if (isAutoScrolling.current) return;

      const navHeight = 100;
      const scrollPosition = window.scrollY + navHeight + 50;

      let currentSection = data.navItems[0]?.id || "home";

      for (const item of data.navItems) {
        const section = document.getElementById(item.id);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = item.id;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollTimeout.current) {
        window.clearTimeout(scrollTimeout.current);
      }
    };
  }, [data]);

  if (loading || !data) return null;

  return (
    <nav className="sticky top-0 w-full z-50 bg-surface-bright/60 backdrop-blur-xl shadow-[0_12px_48px_rgba(255,255,255,0.05)]">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-full mx-auto">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-xl flex items-center gap-1.5 font-bold tracking-[-0.04em] text-[#81ecff] font-headline uppercase cursor-pointer"
        >
          {data.name}
          <span className="material-symbols-outlined text-[#81ecff] hover:bg-surface-container-high transition-all duration-300 rounded-lg active:scale-95">
            {data.brandIcon}
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {data.navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-headline font-bold tracking-tighter uppercase transition-colors ${
                activeSection === item.id
                  ? "text-[#81ecff] border-b-2 border-[#81ecff] pb-1"
                  : "text-on-surface-variant hover:text-[#81ecff]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href={data.downloadBtn.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex bg-primary text-on-primary-fixed font-headline font-bold px-6 py-2 rounded-md hover:opacity-90 transition-all active:scale-95 uppercase tracking-tighter"
          >
            {data.downloadBtn.name}
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="lg:hidden flex items-center justify-center rounded-lg p-2 text-[#81ecff] hover:bg-surface-container-high transition-all active:scale-95"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-[30px]">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 border-t border-white/10 bg-surface-bright/80 backdrop-blur-xl">
          <div className="flex flex-col gap-4">
            {data.navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left font-headline font-bold tracking-tighter uppercase transition-colors ${
                  activeSection === item.id
                    ? "text-[#81ecff]"
                    : "text-on-surface-variant hover:text-[#81ecff]"
                }`}
              >
                {item.label}
              </button>
            ))}

            <a
              href={data.downloadBtn.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center bg-primary text-on-primary-fixed font-headline font-bold px-6 py-3 rounded-md hover:opacity-90 transition-all active:scale-95 uppercase tracking-tighter"
            >
              {data.downloadBtn.name}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
