import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Hero />
      
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold text-velvet mb-6">Discover Our Collection</h2>
        <p className="text-gray-600 text-lg max-w-md mx-auto mb-10">
          Premium handcrafted leather shoes from Sialkot with perfect half sizes
        </p>
        <Link 
          to="/shop"
          className="inline-block bg-velvet text-white px-12 py-5 rounded-2xl font-semibold hover:bg-gold hover:text-velvet transition text-lg"
        >
          Browse All Shoes
        </Link>
      </div>
    </>
  );
};

export default Home;