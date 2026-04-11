const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0a1f] to-[#1a1a2e] text-white flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center z-10">
        <h1 className="text-7xl md:text-8xl font-bold tracking-widest mb-6 text-white">
          VELUM
        </h1>
        <p className="text-3xl text-[#d4af37] mb-10 max-w-2xl mx-auto">
          Premium Leather Shoes<br />Handcrafted in Sialkot
        </p>
        <a 
          href="#shop"
          className="inline-block bg-[#d4af37] text-[#0a0a1f] px-12 py-5 rounded-2xl text-xl font-semibold hover:bg-amber-300 transition-all"
        >
          Shop Collection
        </a>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-10 right-10 text-[180px] opacity-10 hidden lg:block">
        👟
      </div>
    </section>
  );
};

export default Hero;