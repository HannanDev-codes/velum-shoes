import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Cart = () => {
  const { cart, removeFromCart, changeQuantity, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '', phone: '', address: '', city: '', notes: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleOrder = () => {
    if (cart.length === 0) return;
    if (!formData.name || !formData.phone || !formData.address || !formData.city) {
      alert("Please fill all required fields");
      return;
    }

    let message = `🛍️ *Velum New Order*\n\n`;
    message += `👤 ${formData.name}\n📱 ${formData.phone}\n📍 ${formData.address}, ${formData.city}\n`;
    if (formData.notes) message += `📝 ${formData.notes}\n\n`;

    message += `Items:\n`;
    cart.forEach(item => {
      message += `• ${item.name} (UK ${item.size}) × ${item.quantity} = Rs. ${item.price * item.quantity}\n`;
    });
    message += `\nTotal: Rs. ${totalPrice}`;

    window.open(`https://wa.me/923001234567?text=${encodeURIComponent(message)}`, '_blank');
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <p className="text-7xl mb-6">🛍️</p>
        <h2 className="text-4xl font-bold mb-4">Your Cart is Empty</h2>
        <Link to="/shop" className="text-[#d4af37] underline">Go to Shop</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12">Your Cart</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {cart.map(item => (
            <div key={`${item.id}-${item.size}`} className="flex gap-6 bg-white p-6 rounded-3xl shadow">
              <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-2xl" />
              <div className="flex-1">
                <h3 className="font-semibold text-xl">{item.name}</h3>
                <p className="text-gray-600">Size: UK {item.size}</p>
                <div className="flex gap-6 mt-6">
                  <button onClick={() => changeQuantity(item.id, item.size, -1)} className="border px-5 py-2 rounded-xl">-</button>
                  <span className="font-medium text-xl">{item.quantity}</span>
                  <button onClick={() => changeQuantity(item.id, item.size, 1)} className="border px-5 py-2 rounded-xl">+</button>
                </div>
              </div>
              <div>
                <p className="font-bold text-xl">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                <button onClick={() => removeFromCart(item.id, item.size)} className="text-red-600 mt-10">Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-3xl shadow h-fit">
          <h2 className="font-semibold text-2xl mb-6">Delivery Information</h2>
          <input name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} className="w-full p-4 border rounded-2xl mb-4" />
          <input name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleChange} className="w-full p-4 border rounded-2xl mb-4" />
          <input name="address" placeholder="Full Address *" value={formData.address} onChange={handleChange} className="w-full p-4 border rounded-2xl mb-4" />
          <input name="city" placeholder="City *" value={formData.city} onChange={handleChange} className="w-full p-4 border rounded-2xl mb-6" />
          <textarea name="notes" placeholder="Notes (optional)" value={formData.notes} onChange={handleChange} className="w-full p-4 border rounded-2xl h-28" />

          <div className="mt-8 pt-8 border-t">
            <div className="flex justify-between text-2xl font-bold mb-8">
              <span>Total</span>
              <span>Rs. {totalPrice.toLocaleString()}</span>
            </div>
            <button onClick={handleOrder} className="w-full bg-[#d4af37] text-[#0a0a1f] py-6 rounded-2xl font-bold text-lg hover:bg-amber-300">
              Place Order via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;