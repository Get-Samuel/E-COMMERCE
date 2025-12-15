import { NavLink } from 'react-router-dom'
import useCartStore from '../store/cartStore'
import { RiHome6Fill } from "react-icons/ri"
import { FaStore } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";





//shows the active nav / selected nav
const navLinkStyles = ({ isActive }) =>
  `md:text-sm text-xl flex flex-row gap-3 font-medium transition hover:text-orange-600 flex justify-center item-center md:gap-2 ${
    isActive ? 'text-orange-600' : 'text-gray-800'
  }`

function Navbar({ onOpenCart, onOpenCheckout }) {
  const [showNav, setShownav] = useState(false);  

  //cartItems reference function from cartStore.js
  const cartItems = useCartStore((state) => state.cartItems)

  //cartCount reference function from cartStore.js
  const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex md:flex-row flex-col w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-12">
        <div className="flex w-full items-center gap-8 py-2 md:p-0">
          <NavLink to="/" className="text-2xl md:ml-0 ml-4 whitespace-nowrap text-orange-600 font-bold">
            Tekki Mart
          </NavLink>

          {/* mobile nav */}
          <nav className="flex md:hidden md:mr-0 mr-4 ml-auto gap-[4rem] items-center">
            {!showNav && (<AiOutlineMenu onClick={() => setShownav(true)} size={26} className="md:hidden flex text-orange-600"/>)}
            {showNav && (<AiOutlineClose onClick={() => setShownav(false)} size={26} className="md:hidden flex text-orange-600"/>)}
          </nav>

          {/* desktop nav */}
          <nav className="md:flex hidden ml-auto gap-[4rem] items-center">
            <NavLink to="/" className={navLinkStyles} end>
              Home <RiHome6Fill size={22}/>
            </NavLink>

            <NavLink to="/products" className={navLinkStyles}>
              All Products <FaStore size={20}/>
            </NavLink>

            <button
            type="button"
            onClick={onOpenCart}
            className="flex relative flex-row gap-2 justify-between item-center rounded-full px-4 py-2 text-sm font-semibold text-gray-800 transition hover:text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            >
            Cart <FaCartShopping size={20}/>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-600 px-1 text-[11px] font-semibold text-white">
                {cartCount}
              </span>
            )}
            </button>

            <button type="button" onClick={onOpenCheckout} className='flex justify-between items-center gap-2'>
              Checkout <MdOutlinePayment size={25}/>
            </button>
          </nav>
        </div>
        
        {/* mobile nav menu */}
        {showNav && (
          <div className="md:hidden flex w-full p-4 flex-col gap-5">
           <NavLink to="/" className={navLinkStyles} end>
              Home
            </NavLink>

            <NavLink to="/products" className={navLinkStyles}>
              All Products
            </NavLink>

            <button
            type="button"
            onClick={onOpenCart}
            className="flex relative flex-row gap-2 justify-center text-xl item-center px-4 py-2 md:text-sm font-semibold text-gray-800 transition hover:text-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300"
            >
            Cart
            {cartCount > 0 && (
              <span className="absolute md:-right-1 right-[35%] md:-top-1 top-[10%] flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-600 px-1 text-[11px] font-semibold text-white">
                {cartCount}
              </span>
            )}
            </button>

            <button type="button" onClick={onOpenCheckout} className='flex justify-center items-center gap-2 text-xl item-center px-4 py-2 md:text-sm'>
              Checkout
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar

