import { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { ProductCard } from '../components/ProductCard';

export const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the data as soon as the component loads
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await apiService.getAllProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products. Please check your connection.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []); // Empty array means it only runs once

  // UI for when data is fetching
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // UI for when the API fails
  if (error) {
    return <div className="text-center text-red-500 font-medium mt-10">{error}</div>;
  }

  // The actual product grid UI
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Our Products</h1>
      
      {/* Tailwind CSS Grid: 1 column on mobile, up to 4 on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};