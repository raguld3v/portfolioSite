const About = () => {
  return (
    <section
      id="about"
      className="bg-surface-container-low py-32 px-8 md:px-24 scroll-mt-18"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <h2 className="font-headline text-sm font-bold tracking-[0.1em] uppercase text-primary mb-4">
            01 // Brief
          </h2>
          <div className="w-12 h-[2px] bg-primary mb-8"></div>
          <div className="aspect-square bg-surface-container w-full rounded-xl overflow-hidden relative group">
            <img
              className="w-full h-full object-cover group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 opacity-90"
              data-alt="A high-fidelity, minimalist cyborg or robotic bust illustration, side profile, sleek matte black and neon cyan accents."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDhsqcizrKOVIjDduMWQgRsDgrnslPhUXnhUD-4in9Ee9yy1ai3WBGTACHQYAoz2wXBZNJxrkDegAo-prkYpwQIhuNfbTO-QTjiQkw-qYJ8XBfe9okQeaAOIC-K8hN02yYVVGLVucDj7JuYH7k2VvFPrW6bNyivHTXKoHZyh_Xad2hzdGz8Q-arx5Nxx9OAJ4-yKZsRAkwZaFDX8jgMGM0PC1__4-Tp3_QqtGwejYZhGQ5CyNhlw1RzmXZzcIT6f83jtaRkITZaRD8"
            />
          </div>
        </div>
        <div className="md:col-span-8 flex flex-col justify-center">
          <p className="font-headline text-4xl md:text-5xl text-on-surface font-medium leading-tight mb-12">
            Passionate Full Stack Developer with 2+ years of expertise in
            building scalable web applications using the MERN stack. Proven
            track record in optimizing enterprise travel solutions and automated
            disruption management systems.
          </p>
          <div className="grid grid-cols-2 gap-8 border-t border-outline-variant/20 pt-12">
            <div>
              <span className="block text-label text-xs font-bold uppercase tracking-widest text-primary mb-2">
                Primary Core
              </span>
              <span className="text-on-surface-variant">
                Architecture &amp; Logic
              </span>
            </div>
            <div>
              <span className="block text-label text-xs font-bold uppercase tracking-widest text-primary mb-2">
                Philosophy
              </span>
              <span className="text-on-surface-variant">
                Performance First Engineering
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
