import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './hooks/useCart';
import { Navbar } from './components/Navbar'; 

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50 font-sans">
        
        {/* 2. Replace the old <header> placeholder with the real Navbar */}
        <Navbar />

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<h2>Product List Page (Coming Soon)</h2>} />
            <Route path="/cart" element={<h2>Cart Page (Coming Soon)</h2>} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;