const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-8 md:px-24 bg-surface-container-lowest scroll-mt-18"
    >
      <header className="mb-24 relative">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="h-px w-12 bg-primary"></span>
          <span className="font-label text-primary tracking-[0.2em] text-sm uppercase">
            Initialization
          </span>
        </div>
        <h1 className="font-headline text-7xl md:text-8xl font-bold tracking-tighter leading-tight max-w-4xl">
          Let's Build the{" "}
          <span className="text-transparent cls-bg-text-clip kinetic-gradient">
            Future.
          </span>
        </h1>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="bg-surface-container p-8 rounded-xl group hover:bg-surface-container-high transition-colors duration-500">
            <div className="flex items-start justify-between mb-12">
              <div className="p-3 bg-surface-container-highest rounded-lg text-primary group-hover:kinetic-gradient group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined" data-icon="mail">
                  mail
                </span>
              </div>
              <span className="font-label text-on-surface-variant text-[10px] tracking-widest uppercase">
                Communication_01
              </span>
            </div>
            <p className="font-label text-on-surface-variant text-xs uppercase mb-2">
              Email Address
            </p>
            <a
              className="font-headline text-2xl font-bold text-on-surface group-hover:text-primary transition-colors"
              href="mailto:raguld3v@gmail.com"
            >
              raguld3v@gmail.com
            </a>
          </div>
          <div className="bg-surface-container p-8 rounded-xl group hover:bg-surface-container-high transition-colors duration-500">
            <div className="flex items-start justify-between mb-12">
              <div className="p-3 bg-surface-container-highest rounded-lg text-primary group-hover:kinetic-gradient group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined" data-icon="call">
                  call
                </span>
              </div>
              <span className="font-label text-on-surface-variant text-[10px] tracking-widest uppercase">
                Direct_Line_02
              </span>
            </div>
            <p className="font-label text-on-surface-variant text-xs uppercase mb-2">
              Phone Number
            </p>
            <a
              className="font-headline text-2xl font-bold text-on-surface group-hover:text-primary transition-colors"
              href="tel:+918681059067"
            >
              +91 8681059067
            </a>
          </div>
          <div className="bg-surface-container p-8 rounded-xl group hover:bg-surface-container-high transition-colors duration-500 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <img
                alt="Map Visualization"
                className="w-full h-full object-cover"
                data-alt="abstract dark technological map of bangalore city with glowing blue lines and data nodes on black background"
                data-location="Whitefield, Bangalore"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1tzpayTq9rZNU_P-rMP5QesXYP4FF6hcoiBrbaX44HMlWHcPcgIiNyNLg3JIjeDVloy4BABs_-iHFCfEWdQu18-NZSG7P6zc4ClJeNMlR8GP8XoQZtXwbJZG_0c3XN11e6Os_vQkU4_CZ1P55nUajiHh_y5Hvy9ul4qj8TXE1UWYPEy7QNfOn90QYy_j0Xr6b-26vxadSK1cxVoAvszVAZn8MTpflr5PzD8TGMkVVKJnHApWQ4z3GQy-83vynzYga5bEAOfCjqrpz"
              />
            </div>
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-12">
                <div className="p-3 bg-surface-container-highest rounded-lg text-primary group-hover:kinetic-gradient group-hover:text-on-primary transition-all duration-300">
                  <span
                    className="material-symbols-outlined"
                    data-icon="location_on"
                  >
                    location_on
                  </span>
                </div>
                <span className="font-label text-on-surface-variant text-[10px] tracking-widest uppercase">
                  Base_Station_03
                </span>
              </div>
              <p className="font-label text-on-surface-variant text-xs uppercase mb-2">
                Location
              </p>
              <h3 className="font-headline text-2xl font-bold text-on-surface">
                Bangalore
              </h3>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="bg-surface-container-low p-10 rounded-xl relative border-l border-primary/20">
            <div className="flex items-center justify-between mb-12">
              <h2 className="font-headline text-3xl font-bold tracking-tighter uppercase">
                Transmit Message
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="font-label text-[10px] text-primary uppercase tracking-widest">
                  System Online
                </span>
              </div>
            </div>
            <form action="#" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <div className="absolute left-0 top-0 w-[2px] h-full bg-primary transform scale-y-0 group-focus-within:scale-y-100 transition-transform duration-300 origin-top"></div>
                  <input
                    className="w-full bg-surface-container-high border-none rounded-sm px-6 py-4 font-label text-sm tracking-wider focus:ring-0 placeholder:text-outline-variant text-on-surface"
                    placeholder="FULL NAME"
                    type="text"
                  />
                  <label className="absolute -top-3 left-6 bg-surface-container-low px-2 font-label text-[10px] tracking-[0.2em] text-outline uppercase">
                    Sender_Identity
                  </label>
                </div>
                <div className="relative group">
                  <div className="absolute left-0 top-0 w-[2px] h-full bg-primary transform scale-y-0 group-focus-within:scale-y-100 transition-transform duration-300 origin-top"></div>
                  <input
                    className="w-full bg-surface-container-high border-none rounded-sm px-6 py-4 font-label text-sm tracking-wider focus:ring-0 placeholder:text-outline-variant text-on-surface"
                    placeholder="EMAIL ADDRESS"
                    type="email"
                  />
                  <label className="absolute -top-3 left-6 bg-surface-container-low px-2 font-label text-[10px] tracking-[0.2em] text-outline uppercase">
                    Return_Path
                  </label>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute left-0 top-0 w-[2px] h-full bg-primary transform scale-y-0 group-focus-within:scale-y-100 transition-transform duration-300 origin-top"></div>
                <input
                  className="w-full bg-surface-container-high border-none rounded-sm px-6 py-4 font-label text-sm tracking-wider focus:ring-0 placeholder:text-outline-variant text-on-surface"
                  placeholder="SUBJECT OF TRANSMISSION"
                  type="text"
                />
                <label className="absolute -top-3 left-6 bg-surface-container-low px-2 font-label text-[10px] tracking-[0.2em] text-outline uppercase">
                  Header_Info
                </label>
              </div>
              <div className="relative group">
                <div className="absolute left-0 top-0 w-[2px] h-full bg-primary transform scale-y-0 group-focus-within:scale-y-100 transition-transform duration-300 origin-top"></div>
                <textarea
                  className="w-full bg-surface-container-high border-none rounded-sm px-6 py-4 font-label text-sm tracking-wider focus:ring-0 placeholder:text-outline-variant text-on-surface resize-none"
                  placeholder="TYPE YOUR MESSAGE HERE..."
                ></textarea>
                <label className="absolute -top-3 left-6 bg-surface-container-low px-2 font-label text-[10px] tracking-[0.2em] text-outline uppercase">
                  Data_Payload
                </label>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
                <p className="font-body text-xs text-on-surface-variant max-w-xs leading-relaxed">
                  By transmitting this data, you acknowledge that your
                  information will be processed securely.
                </p>
                <button
                  className="group relative kinetic-gradient px-12 py-5 rounded-md text-on-primary-fixed font-headline font-bold uppercase tracking-widest flex items-center gap-4 active:scale-95 transition-all overflow-hidden"
                  type="submit"
                >
                  <span className="relative z-10">Send Packet</span>
                  <span
                    className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform"
                    data-icon="send"
                  >
                    send
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
