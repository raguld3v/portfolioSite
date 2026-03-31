const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 px-8 md:px-24 bg-surface scroll-mt-18"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <h2 className="font-headline text-sm font-bold tracking-[0.1em] uppercase text-primary mb-4">
            02 // Deployments
          </h2>
          <h3 className="font-headline text-6xl font-bold tracking-tighter">
            Infiniti Software Solutions
          </h3>
        </div>
        <div className="text-on-surface-variant font-label uppercase tracking-widest text-sm">
          2022 — 2025
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="md:col-span-3 bg-surface-container-high p-10 rounded-xl hover:bg-surface-bright transition-all duration-500">
          <span className="material-symbols-outlined text-primary text-4xl mb-6">
            hub
          </span>
          <h4 className="font-headline text-2xl font-bold mb-4">
            Subagency Ecosystem
          </h4>
          <p className="text-on-surface-variant leading-relaxed mb-8">
            Spearheaded the development of a multi-tenant platform for travel
            sub-agents, improving transaction throughput by 40%.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-surface-container-lowest text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant rounded-full border border-outline-variant/20">
              Microservices
            </span>
            <span className="px-3 py-1 bg-surface-container-lowest text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant rounded-full border border-outline-variant/20">
              Node.js
            </span>
          </div>
        </div>
        <div className="md:col-span-3 bg-surface-container p-10 rounded-xl hover:bg-surface-bright transition-all duration-500">
          <span className="material-symbols-outlined text-primary text-4xl mb-6">
            groups
          </span>
          <h4 className="font-headline text-2xl font-bold mb-4">
            Group Travel Modules
          </h4>
          <p className="text-on-surface-variant leading-relaxed mb-8">
            Engineered bulk booking logic and reconciliation tools for
            large-scale corporate travel delegations.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-surface-container-lowest text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant rounded-full border border-outline-variant/20">
              React
            </span>
            <span className="px-3 py-1 bg-surface-container-lowest text-[10px] font-bold uppercase tracking-tighter text-on-surface-variant rounded-full border border-outline-variant/20">
              Redux
            </span>
          </div>
        </div>
        <div className="md:col-span-4 bg-surface-container-highest hover:bg-surface-bright transition-all duration-500 p-10 rounded-xl relative overflow-hidden group">
          <div className="relative z-10">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">
              warning_off
            </span>
            <h4 className="font-headline text-3xl font-bold mb-4">
              Disruption Management Engine
            </h4>
            <p className="text-on-surface-variant max-w-xl leading-relaxed mb-8">
              Architected a real-time system to automate re-booking and
              communication during flight disruptions, reducing manual workload
              by 65%.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-tighter rounded-full border border-primary/20">
                High Performance
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-tighter rounded-full border border-primary/20">
                Automated
              </span>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 bg-surface-container-low hover:bg-surface-bright transition-all duration-500 p-10 rounded-xl border border-outline-variant/10">
          <span className="material-symbols-outlined text-primary text-4xl mb-6">
            corporate_fare
          </span>
          <h4 className="font-headline text-2xl font-bold mb-4">B2B Core</h4>
          <p className="text-on-surface-variant leading-relaxed mb-8">
            Refactoring core legacy modules into modern components.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-tighter rounded-full border border-primary/20">
              Angular JS
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-tighter rounded-full border border-primary/20">
              Angular
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
