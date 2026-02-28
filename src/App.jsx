import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* We will build the Navbar component later */}
      <header className="bg-white shadow p-4 text-center text-xl font-bold text-green-600">
        MyCart 
      </header>

      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<h2>Product List Page (Coming Soon)</h2>} />
          <Route path="/cart" element={<h2>Cart Page (Coming Soon)</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;