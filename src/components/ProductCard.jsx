import { useCart } from '../hooks/useCart';

export const ProductCard = ({ product }) => {
  // Grab the addToCart function from our global state
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Product Image Area */}
      <div className="h-48 w-full bg-white p-4 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Details Area */}
      <div className="p-5 flex flex-col flex-grow border-t border-gray-100">
        <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">
          {product.category}
        </span>
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 flex-grow">
          {product.title}
        </h3>
        
        <div className="flex items-center justify-between mt-4">
          {/* Formatted Price in Rupees */}
          <span className="text-lg font-bold text-gray-900">
            ₹{product.price.toFixed(2)}
          </span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};