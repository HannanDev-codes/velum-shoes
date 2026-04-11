import { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first");
      return;
    }
    addToCart(product, selectedSize);
    setSelectedSize(null);

    // Nice notification
    const notif = document.createElement('div');
    notif.style.cssText = `
      position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
      background: #d4af37; color: #0a0a1f; padding: 16px 32px; border-radius: 9999px;
      z-index: 9999; font-weight: 600; box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    notif.textContent = `${product.name} (${selectedSize}) added to cart`;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2500);
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
      <div className="h-80 bg-gray-100 relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-1">{product.name}</h3>
        <p className="text-[#d4af37] text-3xl font-bold">Rs. {product.price}</p>

        <div className="mt-8">
          <p className="text-sm text-gray-600 mb-3">Size (UK)</p>
          <div className="flex flex-wrap gap-3">
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-6 py-3 border rounded-2xl text-sm transition-all ${
                  selectedSize === size 
                    ? 'bg-[#0a0a1f] text-white border-[#0a0a1f]' 
                    : 'hover:border-[#d4af37]'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="mt-10 w-full bg-[#0a0a1f] text-white py-5 rounded-2xl font-semibold hover:bg-[#d4af37] hover:text-[#0a0a1f] transition-all"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;