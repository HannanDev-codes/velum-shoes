const SizeGuide = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-center mb-12">Size Guide</h1>
      
      <div className="bg-white rounded-3xl shadow p-10">
        <h2 className="text-2xl font-semibold mb-6">How to Measure Your Foot</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-[#d4af37] text-[#1a1a2e] w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
            <h3 className="font-semibold mb-2">Step 1</h3>
            <p>Place a sheet of paper on the floor. Wear the socks you will use with the shoes.</p>
          </div>
          <div>
            <div className="bg-[#d4af37] text-[#1a1a2e] w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
            <h3 className="font-semibold mb-2">Step 2</h3>
            <p>Stand on the paper and mark the heel and the longest toe with a pencil.</p>
          </div>
          <div>
            <div className="bg-[#d4af37] text-[#1a1a2e] w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
            <h3 className="font-semibold mb-2">Step 3</h3>
            <p>Measure the distance in centimeters and match with our size chart.</p>
          </div>
          <div>
            <div className="bg-[#d4af37] text-[#1a1a2e] w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mb-4">4</div>
            <h3 className="font-semibold mb-2">Step 4</h3>
            <p>We offer half sizes for perfect fit.</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">Still unsure? Contact us on WhatsApp and we'll help you choose the right size.</p>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;