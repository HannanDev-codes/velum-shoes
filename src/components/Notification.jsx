// src/components/Notification.jsx
import { useEffect, useState } from 'react';

const Notification = ({ message, type = 'success', onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300); // Wait for fade out animation
    }, 2800);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'error' ? 'bg-red-600' : 'bg-[#1a1a2e]';
  const icon = type === 'error' ? '❌' : '✅';

  return (
    <div
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 ${bgColor} text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 z-[2000] transition-all duration-300 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span className="font-medium">{message}</span>
    </div>
  );
};

export default Notification;