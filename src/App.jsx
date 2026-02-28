import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './hooks/useCart';
import { Navbar } from './components/Navbar';
import { ProductListPage } from './pages/ProductListPage';
import { CartPage } from './pages/CartPage'; // NEW: Import the Cart Page

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navbar />

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            {/* NEW: Connect the CartPage to the /cart route */}
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;