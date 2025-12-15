import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CartModal from './components/CartModal'
import CheckoutModal from './components/CheckoutModal'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import AddtoCartNotify from './components/AddtoCartNotify'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [showAddToCart, setShowAddToCart] = useState(false)
  const [notifyProductTitle, setNotifyProductTitle] = useState('')  

  const handleNotifyAddToCart = (title) => {
    setShowAddToCart(true)
    // hide the toast after a short delay
    setTimeout(() => setShowAddToCart(false), 5000)
    setNotifyProductTitle(title);
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {showAddToCart && <AddtoCartNotify title = {notifyProductTitle} />}

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
          <Route path="/" element={<Home notifyAddToCart={handleNotifyAddToCart} />} />
          <Route
            path="/products"
            element={<Products notifyAddToCart={handleNotifyAddToCart} />}
          />
          <Route path="/products/:id" element={<ProductDetail notifyAddToCart={handleNotifyAddToCart} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
