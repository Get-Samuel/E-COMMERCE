import useCartStore from '../store/cartStore'
import { formatCurrency } from '../utils/formatCurrency'
import { RiDeleteBin6Line } from "react-icons/ri";
import Modal from './Modal'

function CartModal({ open, onClose, onCheckout }) {
  const cartItems = useCartStore((state) => state.cartItems)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const clearCart = useCartStore((state) => state.clearCart)

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  )

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Your Cart"
      footer={
        <>
          <button
            type="button"
            onClick={clearCart}
            className="rounded-full flex justify-between items-center gap-1  px-5 py-3 text-sm font-semibold text-red-600 transition duration-300 hover:bg-red-200"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={onCheckout}
            className="btn-primary"
            disabled={!cartItems.length}
          >
            Checkout 
          </button>
        </>
      }
    >
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. Start adding products you love.</p>
      ) : (
        <div className="space-y-4">
          <ul className="space-y-3">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-gray-100 p-3 shadow-sm"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                  <p className="text-xs text-gray-500">
                    {item.quantity} × {formatCurrency(item.price)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold text-gray-900">
                    {formatCurrency(item.price * (item.quantity || 1))}
                  </p>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="rounded-full px-3 py-2 text-xs font-semibold text-red-600 transition"
                  >
                    <RiDeleteBin6Line size={20}/>
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
            <p className="text-sm font-medium text-gray-600">Total</p>
            <p className="text-lg font-semibold text-gray-900">{formatCurrency(total)}</p>
          </div>
        </div>
      )}
    </Modal>
  )
}

export default CartModal

