const Stack = () => {
  return (
    <section
      id="stack"
      className="py-32 px-8 md:px-24 bg-surface-container-lowest scroll-mt-18"
    >
      <h2 className="font-headline text-sm font-bold tracking-widest uppercase text-primary mb-16 text-center">
        03 // Technology Registry
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
        <div>
          <h4 className="font-headline text-xl font-bold mb-8 border-b border-outline-variant/20 pb-4">
            Frontend Layer
          </h4>
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container text-xs font-bold uppercase tracking-widest hover:bg-primary/20 hover:text-primary transition-all cursor-default">
              React.js
            </div>
            <div className="px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container text-xs font-bold uppercase tracking-widest hover:bg-primary/20 hover:text-primary transition-all cursor-default">
              Next.js
            </div>
            <div className="px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container text-xs font-bold uppercase tracking-widest hover:bg-primary/20 hover:text-primary transition-all cursor-default">
              Tailwind CSS
            </div>
            <div className="px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container text-xs font-bold uppercase tracking-widest hover:bg-primary/20 hover:text-primary transition-all cursor-default">
              TypeScript
            </div>
            <div className="px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container text-xs font-bold uppercase tracking-widest hover:bg-primary/20 hover:text-primary transition-all cursor-default">
              Redux Toolkit
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-headline text-xl font-bold mb-8 border-b border-outline-variant/20 pb-4">
            Backend &amp; API
          </h4>
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container text-xs font-bold uppercase tracking-widest hover:bg-primary/20 hover:text-primary transition-all cursor-default">
              Node.js
            </div>
            <div className="px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container text-xs font-bold uppercase tracking-widest hover:bg-primary/20 hover:text-primary transition-all cursor-default">
              Express
            </div>
            <div className="px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container text-xs font-bold uppercase tracking-widest hover:bg-primary/20 hover:text-primary transition-all cursor-default">
              MongoDB
            </div>
            <div className="px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container text-xs font-bold uppercase tracking-widest hover:bg-primary/20 hover:text-primary transition-all cursor-default">
              PostgreSQL
            </div>
            <div className="px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container text-xs font-bold uppercase tracking-widest hover:bg-primary/20 hover:text-primary transition-all cursor-default">
              REST / GraphQL
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-headline text-xl font-bold mb-8 border-b border-outline-variant/20 pb-4">
            Infrastructure
          </h4>
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container text-xs font-bold uppercase tracking-widest hover:bg-primary/20 hover:text-primary transition-all cursor-default">
              AWS
            </div>
            <div className="px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container text-xs font-bold uppercase tracking-widest hover:bg-primary/20 hover:text-primary transition-all cursor-default">
              Docker
            </div>
            <div className="px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container text-xs font-bold uppercase tracking-widest hover:bg-primary/20 hover:text-primary transition-all cursor-default">
              GitHub Actions
            </div>
            <div className="px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container text-xs font-bold uppercase tracking-widest hover:bg-primary/20 hover:text-primary transition-all cursor-default">
              Figma
            </div>
            <div className="px-4 py-2 bg-secondary-container rounded-full text-on-secondary-container text-xs font-bold uppercase tracking-widest hover:bg-primary/20 hover:text-primary transition-all cursor-default">
              Vercel
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
