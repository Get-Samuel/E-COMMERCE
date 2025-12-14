import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CartModal from './components/CartModal'
import CheckoutModal from './components/CheckoutModal'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      
      <Navbar
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      <CartModal
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => {
          setIsCartOpen(false)
          setIsCheckoutOpen(true)
        }}
      />

      <CheckoutModal
        open={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      <main className="mx-auto w-full max-w-6xl px-4 pb-12 pt-24 sm:px-6 lg:px-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
