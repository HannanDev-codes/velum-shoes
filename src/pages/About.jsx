const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-center mb-12">Our Story</h1>
      
      <div className="prose max-w-none text-lg leading-relaxed text-gray-700">
        <p className="mb-6">
          Velum was born from a simple frustration: finding quality leather shoes that actually fit perfectly.
        </p>
        <p className="mb-6">
          We partner with master craftsmen in Sialkot, Pakistan — the world-renowned hub for premium leather footwear — 
          to create shoes using full-grain leather that age beautifully and last for years.
        </p>
        <p>
          What makes us different is our commitment to **half sizes**. Because we believe fit matters more than anything.
        </p>
      </div>

      <div className="mt-16 bg-[#1a1a2e] text-white p-10 rounded-3xl text-center">
        <h3 className="text-2xl font-semibold mb-4">Made with Pride in Sialkot, Pakistan</h3>
        <p className="text-gray-300">Premium Leather • Ethical Craftsmanship • Perfect Fit</p>
      </div>
    </div>
  );
};

export default About;