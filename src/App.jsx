import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './hooks/useCart';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 font-sans">
        
        {/* Placeholder for the Navbar we will build next */}
        <header className="bg-white shadow p-4 text-center text-xl font-bold text-blue-600">
          MyCart Application
        </header>

        {/* The Router Switchboard */}
        <main className="container mx-auto px-4 py-8">
          <Routes>
            {/* The home page route */}
            <Route path="/" element={<h2>Product List Page (Coming Soon)</h2>} />
            {/* The cart page route */}
            <Route path="/cart" element={<h2>Cart Page (Coming Soon)</h2>} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;