import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Hero />

      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Discover Our Collection</h2>
        <p className="text-gray-600 mb-10 max-w-md mx-auto">
          Premium leather shoes with half sizes, handcrafted in Sialkot
        </p>
        <Link 
          to="/shop"
          className="inline-block bg-[#1a1a2e] text-white px-10 py-4 rounded-2xl font-semibold hover:bg-[#d4af37] hover:text-[#1a1a2e] transition"
        >
          Browse All Shoes
        </Link>
      </div>
    </>
  );
};

export default Home;