const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 px-8 md:px-24 bg-surface-container-lowest scroll-mt-18"
    >
      <header className="mb-24 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-label text-sm uppercase tracking-[0.2em] text-primary mb-4 block">
              Engineered Portfolio
            </span>
            <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-surface leading-[0.9]">
              Deployed
              <br />
              <span className="text-on-surface-variant/40">Solutions</span>
            </h1>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="font-label text-xs uppercase tracking-widest text-outline">
              System Version
            </span>
            <span className="font-headline text-2xl font-bold text-on-surface">
              Archive v2.0
            </span>
          </div>
        </div>
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article className="group bg-surface-container flex flex-col h-full rounded-none overflow-hidden transition-all duration-500 hover:bg-surface-container-high relative">
          <div className="relative h-72 w-full overflow-hidden bg-surface-container-lowest">
            <img
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              data-alt="futuristic 3d architectural rendering of a modern glass skyscraper with blueprint lines overlay and cyan holographic highlights"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5aiRzsej4OSTbN4MIqqRiNMr7LeeBhd1fYTYssgng7DVluPwOICjnY1zcelxupMpLC-yxJI2svDtZim6TSwvYMHLxLMpiUMA-ns9zQycFrzkrYXPXYfWE28AxaYo6MZBcVL2XBTWgaOyfLPdbPzmA_XizQaz8t80gndgTYgJPENL0PMOKu_sWvKsyK4wX239wlciq8OIncsKe7EnE1a5L_Y-pz2he9dGGclq2D_kmYiSnk4qZyYsxoalxqzWO-7sl1D6y6QYyBVx6"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface-container to-transparent opacity-80"></div>
            <div className="absolute top-6 left-6">
              <span className="bg-primary/10 backdrop-blur-md text-primary px-3 py-1 text-[10px] font-bold tracking-widest uppercase border border-primary/20">
                Three.js / WebGL
              </span>
            </div>
          </div>
          <div className="p-10 flex flex-col grow">
            <div className="h-12 mb-4">
              <h4 className="text-2xl font-headline font-bold text-white group-hover:text-primary transition-colors">
                3D real estate web sales
              </h4>
            </div>
            <div className="h-24 mb-8">
              <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                Immersive property exploration engine. Leverages spatial
                computing to render high-fidelity architectural visualizations
                directly in the browser with real-time lighting.
              </p>
            </div>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-8 h-10 overflow-hidden">
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  React
                </span>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Three.js
                </span>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  GSAP
                </span>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                <a
                  className="text-primary font-label text-xs font-bold uppercase tracking-widest flex items-center group/link"
                  href="#"
                >
                  Launch Module
                  <span
                    className="material-symbols-outlined ml-2 text-sm transition-transform group-hover/link:translate-x-1"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </a>
                <span
                  className="material-symbols-outlined text-outline-variant hover:text-white cursor-pointer"
                  data-icon="code"
                >
                  code
                </span>
              </div>
            </div>
          </div>
        </article>
        <article className="group bg-surface-container flex flex-col h-full rounded-none overflow-hidden transition-all duration-500 hover:bg-surface-container-high relative">
          <div className="relative h-72 w-full overflow-hidden bg-surface-container-lowest">
            <img
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              data-alt="abstract digital visualization of data points and grid structures connecting in a dark blue and black geometric pattern"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKgy-GscXRndJ0Bimil3psMUU_1wwR-70PADhiCAjZX1JyPlbaa64icYJ2kILMmsvalRUU4Th-K0w5d_IcUU830A_pMV0a95pvLPCl49RbIo8-sn3IBFml90T-UZrRdfo7q4mVTuJLtwiSPIsZ7KI0Dcfj11IFC_5LmqgCm6J1VxZmmROvln4oz5LkF38QF5_xT0Ag_ZkB_yILHEYY1Y5ZVd1sKBxlReA9kNO2pHfnlwejo9EfTPNZ4chFVO-FojMJlbFEYOHSxJ9k"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface-container to-transparent opacity-80"></div>
            <div className="absolute top-6 left-6">
              <span className="bg-primary/10 backdrop-blur-md text-primary px-3 py-1 text-[10px] font-bold tracking-widest uppercase border border-primary/20">
                Full Stack
              </span>
            </div>
          </div>
          <div className="p-10 flex flex-col grow">
            <div className="h-12 mb-4">
              <h4 className="text-2xl font-headline font-bold text-white group-hover:text-primary transition-colors">
                Habit Tracker
              </h4>
            </div>
            <div className="h-24 mb-8">
              <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                Precision analytics dashboard for behavioral optimization. Built
                with sophisticated state management and visual data feedback
                loops to ensure consistency in user progress.
              </p>
            </div>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-8 h-10 overflow-hidden">
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Next.js
                </span>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  PostgreSQL
                </span>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Prisma
                </span>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                <a
                  className="text-primary font-label text-xs font-bold uppercase tracking-widest flex items-center group/link"
                  href="#"
                >
                  Open Dashboard
                  <span
                    className="material-symbols-outlined ml-2 text-sm transition-transform group-hover/link:translate-x-1"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </a>
                <span
                  className="material-symbols-outlined text-outline-variant hover:text-white cursor-pointer"
                  data-icon="code"
                >
                  code
                </span>
              </div>
            </div>
          </div>
        </article>
        <article className="group bg-surface-container flex flex-col h-full rounded-none overflow-hidden transition-all duration-500 hover:bg-surface-container-high relative">
          <div className="relative h-72 w-full overflow-hidden bg-surface-container-lowest">
            <img
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              data-alt="dynamic close-up of a high-tech gym interior with neon lighting and modern fitness equipment in a dark moody atmosphere"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvotE5PStaZgzNK28BIYcupCEtK98SpuphqMOZKBdewumcJ5wB4yjapbxvMmE4WSG3VUt_2rzipj0y7Ek03lhfkEcVdgdZhtVqNAdVRN5CfStawsCfRqpPazNfJyVZ83BF2tssm-TGilk2TulpE-X6zNtMOMHDLVKnELHYOslL81nt2LULSbpem5RoRC3gCWkBU90M_1eYBuA5yg91ZLnFwvvxk2dFPu3B8utGp1f6usttDGGNqkl_zpXqS3hFmz3M1uhfWS2N_7Fm"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface-container to-transparent opacity-80"></div>
            <div className="absolute top-6 left-6">
              <span className="bg-primary/10 backdrop-blur-md text-primary px-3 py-1 text-[10px] font-bold tracking-widest uppercase border border-primary/20">
                Mobile First
              </span>
            </div>
          </div>
          <div className="p-10 flex flex-col grow">
            <div className="h-12 mb-4">
              <h4 className="text-2xl font-headline font-bold text-white group-hover:text-primary transition-colors">
                MMA Fitness Gym Application
              </h4>
            </div>
            <div className="h-24 mb-8">
              <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                High-performance management system for combat sports facilities.
                Featuring biometric tracking, automated scheduling, and
                real-time member engagement metrics.
              </p>
            </div>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-8 h-10 overflow-hidden">
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Firebase
                </span>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Flutter
                </span>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Stripe
                </span>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                <a
                  className="text-primary font-label text-xs font-bold uppercase tracking-widest flex items-center group/link"
                  href="#"
                >
                  View Terminal
                  <span
                    className="material-symbols-outlined ml-2 text-sm transition-transform group-hover/link:translate-x-1"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </a>
                <span
                  className="material-symbols-outlined text-outline-variant hover:text-white cursor-pointer"
                  data-icon="code"
                >
                  code
                </span>
              </div>
            </div>
          </div>
        </article>
        <article className="group bg-surface-container flex flex-col h-full rounded-none overflow-hidden transition-all duration-500 hover:bg-surface-container-high relative">
          <div className="relative h-72 w-full overflow-hidden bg-surface-container-lowest">
            <img
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              data-alt="minimalist code snippet visualization with vibrant syntax highlighting glowing against a deep black background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQiDZ9A8bBevQEMU6HUGLjtqjVwhO5wVUdyhWprAJ8vV2yZlBtVhdR4gZMZ8Qh4RDyBk6u1K9WBR-EXgpTLc4wSB_0HUjJRUHDP1pfME_oD1fJvWEE9_nXo9Y-NzAPUkLFQ6rvROhHfOSyz4zy7CW-PUW___KurZa6Z0gm4QMhV0x0KNbX0bhvSedKRyovKE7IQQ9sLVJ8q1MF8MFe5rwvlVn0O6q9ggB3J2KWfmP0MIf4qSpU4zs8XPrD0vcTLaiHmBWzVUhBDqVu"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface-container to-transparent opacity-80"></div>
            <div className="absolute top-6 left-6">
              <span className="bg-primary/10 backdrop-blur-md text-primary px-3 py-1 text-[10px] font-bold tracking-widest uppercase border border-primary/20">
                Infrastructure
              </span>
            </div>
          </div>
          <div className="p-10 flex flex-col grow">
            <div className="h-12 mb-4">
              <h4 className="text-2xl font-headline font-bold text-white group-hover:text-primary transition-colors">
                CRUD - MERN Stack Project
              </h4>
            </div>
            <div className="h-24 mb-8">
              <p className="text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                Standardized architecture for rapid enterprise scaling. A robust
                boiler-plate implementation using MongoDB, Express, React, and
                Node.js with JWT authentication.
              </p>
            </div>
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-8 h-10 overflow-hidden">
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Node.js
                </span>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Express
                </span>
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  MongoDB
                </span>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20">
                <a
                  className="text-primary font-label text-xs font-bold uppercase tracking-widest flex items-center group/link"
                  href="#"
                >
                  Access Source
                  <span
                    className="material-symbols-outlined ml-2 text-sm transition-transform group-hover/link:translate-x-1"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </a>
                <span
                  className="material-symbols-outlined text-outline-variant hover:text-white cursor-pointer"
                  data-icon="code"
                >
                  code
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
