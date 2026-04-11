const SizeGuide = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-center mb-12">Size Guide</h1>
      
      <div className="bg-white rounded-3xl shadow p-12">
        <h2 className="text-2xl font-semibold mb-8">How to Measure Your Foot</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[ 
            { num: "1", title: "Prepare", desc: "Place A4 paper on flat floor. Wear the socks you will use with the shoes." },
            { num: "2", title: "Mark", desc: "Stand straight and mark the heel and your longest toe with a pencil." },
            { num: "3", title: "Measure", desc: "Use a ruler to measure the length in centimeters." },
            { num: "4", title: "Choose", desc: "Match your measurement with our size chart. Half sizes available." }
          ].map((step) => (
            <div key={step.num} className="flex gap-6">
              <div className="w-12 h-12 bg-[#d4af37] text-[#0a0a1f] rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
                {step.num}
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;