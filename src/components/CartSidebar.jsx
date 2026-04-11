import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';
import { useState } from 'react';

const CartSidebar = () => {
  const { cart, removeFromCart, changeQuantity, totalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    notes: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;
    if (!formData.name || !formData.phone || !formData.address || !formData.city) {
      alert("Please fill all required fields (Name, Phone, Address, City)");
      return;
    }

    let message = `🛍️ *New Velum Order*\n\n`;
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
    message += `✅ Cash on Delivery\n`;
    message += `Thank you for ordering from Velum! 👟`;

    const whatsappNumber = "923251247372"; // ← CHANGE TO YOUR REAL WHATSAPP NUMBER
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
    clearCart();
    
    // Clear form
    setFormData({ name: '', phone: '', address: '', city: '', notes: '' });
  };

  return (
    <div 
  id="cart-sidebar"
  className="fixed top-0 right-0 w-full md:w-[440px] h-full bg-white shadow-2xl transform translate-x-full transition-transform duration-300 z-[1000] flex flex-col"
>
      <div className="p-6 bg-[#1a1a2e] text-white flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Your Cart ({cart.length})</h2>
        <button onClick={() => document.getElementById('cart-sidebar').classList.remove('translate-x-0')}>
          <X size={28} />
        </button>
      </div>

      <div className="flex-1 p-6 overflow-auto space-y-6">
        {cart.length === 0 ? (
          <div className="text-center mt-20 text-gray-500">
            Your cart is empty
          </div>
        ) : (
          cart.map((item) => (
            <div key={`${item.id}-${item.size}`} className="flex gap-4 border-b pb-6">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
              <div className="flex-1">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-600">Size: UK {item.size}</p>
                <div className="flex items-center gap-3 mt-3">
                  <button onClick={() => changeQuantity(item.id, item.size, -1)} className="w-8 h-8 border rounded-lg">-</button>
                  <span className="font-medium">{item.quantity}</span>
                  <button onClick={() => changeQuantity(item.id, item.size, 1)} className="w-8 h-8 border rounded-lg">+</button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                <button onClick={() => removeFromCart(item.id, item.size)} className="text-red-500 text-sm mt-4">Remove</button>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="p-6 border-t bg-gray-50">
          <div className="mb-6">
            <h3 className="font-semibold mb-4">Delivery Information</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-xl mb-3"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number (03xx-xxxxxxx) *"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-xl mb-3"
            />
            <input
              type="text"
              name="address"
              placeholder="Full Address *"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-xl mb-3"
            />
            <input
              type="text"
              name="city"
              placeholder="City *"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-xl mb-3"
            />
            <textarea
              name="notes"
              placeholder="Any special notes (optional)"
              value={formData.notes}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-xl h-20"
            />
          </div>

          <div className="flex justify-between text-xl font-bold mb-6">
            <span>Total</span>
            <span>Rs. {totalPrice.toLocaleString()}</span>
          </div>

          <button
            onClick={handleWhatsAppOrder}
            className="w-full py-5 bg-[#d4af37] hover:bg-amber-300 text-[#1a1a2e] font-bold text-lg rounded-2xl transition"
          >
            Send Order via WhatsApp
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;