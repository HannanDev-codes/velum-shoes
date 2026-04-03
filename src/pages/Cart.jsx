// src/pages/Cart.jsx
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Cart = () => {
  const { cart, removeFromCart, changeQuantity, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    if (!formData.name || !formData.phone || !formData.address || !formData.city) {
      alert("Please fill all required fields: Name, Phone, Address, and City");
      return;
    }

    let message = `🛍️ *New Order from Velum*\n\n`;
    message += `👤 Name: ${formData.name}\n`;
    message += `📱 Phone: ${formData.phone}\n`;
    message += `📍 Address: ${formData.address}\n`;
    message += `🏙️ City: ${formData.city}\n`;
    if (formData.notes) message += `📝 Notes: ${formData.notes}\n\n`;

    message += `🛒 *Items:*\n`;
    cart.forEach(item => {
      message += `• ${item.name} (UK ${item.size}) × ${item.quantity} = Rs. ${item.price * item.quantity}\n`;
    });

    message += `\n💰 *Total: Rs. ${totalPrice}*\n`;
    message += `✅ Cash on Delivery\n\n`;
    message += `Please confirm my order!`;

    const whatsappNumber = "923001234567"; // ← CHANGE TO YOUR REAL NUMBER
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
    clearCart();
    setFormData({ name: '', phone: '', address: '', city: '', notes: '' });
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
        <div className="text-6xl mb-6">🛍️</div>
        <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added any shoes yet.</p>
        <Link 
          to="/shop" 
          className="bg-[#1a1a2e] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#d4af37] hover:text-[#1a1a2e]"
        >
          Browse Our Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {cart.map((item) => (
            <div key={`${item.id}-${item.size}`} className="bg-white p-6 rounded-3xl shadow flex gap-6">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-32 h-32 object-cover rounded-2xl"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-xl">{item.name}</h3>
                <p className="text-gray-600">Size: UK {item.size}</p>
                
                <div className="flex items-center gap-4 mt-6">
                  <button 
                    onClick={() => changeQuantity(item.id, item.size, -1)}
                    className="w-10 h-10 border rounded-xl hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="font-semibold text-lg w-8 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => changeQuantity(item.id, item.size, 1)}
                    className="w-10 h-10 border rounded-xl hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold text-2xl">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                <button 
                  onClick={() => removeFromCart(item.id, item.size)}
                  className="text-red-500 mt-8 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Form */}
        <div className="bg-white p-8 rounded-3xl shadow h-fit sticky top-8">
          <h3 className="font-semibold text-2xl mb-6">Delivery Details</h3>
          
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-4 border rounded-2xl mb-4"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-4 border rounded-2xl mb-4"
          />
          <input
            type="text"
            name="address"
            placeholder="Full Address *"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-4 border rounded-2xl mb-4"
          />
          <input
            type="text"
            name="city"
            placeholder="City *"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full p-4 border rounded-2xl mb-6"
          />
          <textarea
            name="notes"
            placeholder="Special Notes (Optional)"
            value={formData.notes}
            onChange={handleInputChange}
            className="w-full p-4 border rounded-2xl h-28"
          />

          <div className="border-t pt-6 mt-6">
            <div className="flex justify-between text-xl font-bold mb-6">
              <span>Total</span>
              <span>Rs. {totalPrice.toLocaleString()}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full py-5 bg-[#d4af37] hover:bg-amber-300 text-[#1a1a2e] font-bold text-lg rounded-2xl transition"
            >
              Place Order via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;