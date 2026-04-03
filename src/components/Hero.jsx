const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f1e] text-white flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold tracking-[4px] mb-6">
          VELUM
        </h1>
        <p className="text-2xl md:text-3xl text-[#d4af37] mb-10 max-w-2xl mx-auto">
          Premium Handcrafted Leather Shoes<br />
          Made in Sialkot • Half Sizes Available
        </p>
        <a
          href="#shop"
          className="inline-block bg-[#d4af37] hover:bg-amber-300 text-[#1a1a2e] px-12 py-5 rounded-2xl text-xl font-bold transition-all duration-300 shadow-lg"
        >
          Shop Now
        </a>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#d4af37]/30 text-9xl">👟</div>
    </section>
  );
};

export default Hero;