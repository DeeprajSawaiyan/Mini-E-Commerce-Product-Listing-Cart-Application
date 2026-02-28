import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './hooks/useCart';
import { Navbar } from './components/Navbar';
// 1. Import the new page component
import { ProductListPage } from './pages/ProductListPage'; 

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navbar />

        <main className="container mx-auto px-4 py-8">
          <Routes>
            {/* 2. Replace the placeholder with the actual component */}
            <Route path="/" element={<ProductListPage />} />
            
            <Route path="/cart" element={<h2>Cart Page (Coming Soon)</h2>} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;