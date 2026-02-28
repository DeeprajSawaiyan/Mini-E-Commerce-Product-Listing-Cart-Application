import { useCart } from '../hooks/useCart';

export const CartItem = ({ item }) => {
  
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
      
      <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-lg p-2 flex items-center justify-center">
        <img 
          src={item.image} 
          alt={item.title} 
          className="max-h-full max-w-full object-contain"
        />
      </div>

      
      <div className="flex-grow text-center sm:text-left">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">{item.title}</h3>
        <p className="text-xs text-gray-500 capitalize mt-1">{item.category}</p>
        <p className="text-lg font-bold text-gray-900 mt-2">${item.price.toFixed(2)}</p>
      </div>

      
      <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1 border border-gray-200">
        <button 
          onClick={() => updateQuantity(item.id, -1)}
          className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-gray-600 hover:bg-gray-100 shadow-sm transition-colors"
        >
          -
        </button>
        <span className="w-6 text-center font-medium text-gray-800">{item.quantity}</span>
        <button 
          onClick={() => updateQuantity(item.id, 1)}
          className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-gray-600 hover:bg-gray-100 shadow-sm transition-colors"
        >
          +
        </button>
      </div>

      
      <div className="flex flex-col items-center sm:items-end gap-2 min-w-[100px]">
        <span className="font-bold text-blue-600 hidden sm:block">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
        <button 
          onClick={() => removeFromCart(item.id)}
          className="text-sm text-red-500 hover:text-red-700 font-medium transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
};