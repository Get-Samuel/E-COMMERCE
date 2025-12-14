import { NavLink } from 'react-router-dom'
import useCartStore from '../store/cartStore'
import { RiHome6Fill } from "react-icons/ri"
import { FaStore } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";



const navLinkStyles = ({ isActive }) =>
  `text-sm font-medium transition hover:text-orange-600 flex justify-between item-center gap-2 ${
    isActive ? 'text-orange-600' : 'text-gray-800'
  }`

function Navbar({ onOpenCart, onOpenCheckout }) {
  const cartItems = useCartStore((state) => state.cartItems)
  const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-12">
        <div className="flex w-full items-center gap-8 sm:gap-10">
          <NavLink to="/" className="text-2xl text-orange-600 font-bold">
            Tekki Mart
          </NavLink>
          <nav className="flex ml-auto gap-[4rem] items-center">
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

      </div>
    </header>
  )
}

export default Navbar

