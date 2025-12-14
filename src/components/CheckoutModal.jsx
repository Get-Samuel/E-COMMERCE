import useCartStore from '../store/cartStore'
import { formatCurrency } from '../utils/formatCurrency'
import Modal from './Modal'

function CheckoutModal({ open, onClose }) {

  //cartItems reference function from cartStore
  const cartItems = useCartStore((state) => state.cartItems)

  //clearCart reference function from cartStore
  const clearCart = useCartStore((state) => state.clearCart)

  //Sum/total logic for items in a cart.
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  )

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Checkout Summary"
      footer={
        <>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              clearCart()
              onClose()
            }}
            className="btn-primary"
            disabled={!cartItems.length}
          >
            Confirm Order
          </button>
        </>
      }
    >
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Nothing to checkout yet. Add products to your cart.</p>
      ) : (
        <div className="space-y-3">
          <div className="space-y-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">{item.title}</span>
                  <span className="text-gray-500">× {item.quantity}</span>
                </div>
                <span className="font-semibold text-gray-900">
                  {formatCurrency(item.price * (item.quantity || 1))}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
            <span className="text-sm font-medium text-gray-600">Total due</span>
            <span className="text-lg font-semibold text-gray-900">{formatCurrency(total)}</span>
          </div>
          <p className="text-xs text-gray-500">
            This is a demo checkout. No payment information is processed.
          </p>
        </div>
      )}
    </Modal>
  )
}

export default CheckoutModal
 
