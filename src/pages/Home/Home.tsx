import { usePortfolio } from "../../hooks/usePortfolio";

const Home = () => {
  const { data } = usePortfolio();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      const navHeight = 90;
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-204.75 flex flex-col justify-center px-8 md:px-24 py-20 relative overflow-hidden scroll-mt-18"
    >
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
      <div className="inline-flex items-center gap-3 px-4 py-2 bg-surface-container-high rounded-full w-fit mb-8 animate-pulse">
        <span className="w-2 h-2 rounded-full bg-primary"></span>
        <span className="text-label text-xs font-bold tracking-[0.05em] uppercase text-primary">
          {data?.home.availability}
        </span>
      </div>
      <h1 className="font-headline text-7xl md:text-9xl font-bold tracking-[-0.04em] mb-4 leading-[0.9]">
        {data?.home.name.slice(0, 5)} <br />
        <span className="text-transparent cls-bg-text-clip kinetic-gradient">
          {data?.home.name.slice(6)}
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-end">
        <div>
          <p className="font-headline text-3xl md:text-4xl text-on-surface-variant font-light tracking-tight mb-6">
            {data?.home.role}
          </p>
          <div className="flex gap-4">
            <button
              onClick={() =>
                scrollToSection(data?.home.primaryBtn.route || "contact")
              }
              className="bg-primary text-on-primary-fixed font-bold px-8 py-4 rounded-md kinetic-gradient hover:scale-[1.02] active:scale-95 transition-all font-headline uppercase tracking-tighter"
            >
              {data?.home.primaryBtn.name}
            </button>

            <a
              href={data?.home.secondaryBtn.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-surface-container-highest text-on-surface px-8 py-4 rounded-md font-headline uppercase tracking-tighter hover:bg-surface-bright transition-all"
            >
              {data?.home.secondaryBtn.name}
            </a>
          </div>
        </div>
        <div className="hidden md:block max-w-md ml-auto text-right">
          <p className="text-on-surface-variant text-lg leading-relaxed">
            {data?.home.desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
