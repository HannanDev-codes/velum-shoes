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
  
  // Nice notification
  const notification = document.createElement('div');
  notification.className = "fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#1a1a2e] text-white px-6 py-4 rounded-2xl shadow-2xl z-[2000]";
  notification.textContent = `${product.name} (${selectedSize}) added to cart!`;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.transition = 'all 0.4s';
    notification.style.opacity = '0';
    setTimeout(() => notification.remove(), 400);
  }, 2500);

  setSelectedSize(null);
};
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl transition-all duration-300 group">
      <div className="h-80 bg-gray-100 relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-2xl mb-1">{product.name}</h3>
        <p className="text-[#d4af37] text-3xl font-bold">Rs. {product.price.toLocaleString()}</p>

        <div className="mt-6">
          <p className="text-sm text-gray-600 mb-3 font-medium">Select Size (UK)</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-11 h-11 flex items-center justify-center border rounded-xl text-sm font-medium transition-all ${
                  selectedSize === size 
                    ? 'bg-[#1a1a2e] text-white border-[#1a1a2e]' 
                    : 'border-gray-300 hover:border-[#1a1a2e]'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full mt-8 bg-[#1a1a2e] hover:bg-[#d4af37] hover:text-[#1a1a2e] text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;