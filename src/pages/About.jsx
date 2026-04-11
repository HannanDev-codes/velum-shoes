const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-center mb-12">Our Story</h1>
      <div className="prose text-lg text-gray-700 max-w-none">
        <p className="mb-6">
          Velum was founded with one simple goal — to create premium leather shoes that actually fit perfectly.
        </p>
        <p className="mb-6">
          We work directly with master craftsmen in Sialkot, the leather capital of Pakistan, using full-grain leather that ages beautifully and lasts for years.
        </p>
        <p>
          What sets us apart is our commitment to **half sizes**. Because the right fit makes all the difference.
        </p>
      </div>

      <div className="mt-16 bg-[#0a0a1f] text-white p-12 rounded-3xl text-center">
        <p className="text-xl">Handcrafted with pride in Sialkot, Pakistan</p>
      </div>
    </div>
  );
};

export default About;