import { Link } from 'react-router-dom'
import useCartStore from '../store/cartStore'
import { formatCurrency } from '../utils/formatCurrency'

function ProductCard({ product, notifyAddToCart }) {
  const addToCart = useCartStore((state) => state.addToCart)

  const handleAddToCart = (title) => {
    addToCart(product)
    notifyAddToCart(title);
  }

  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-50 card-hover">
      <img
        src={product.image}
        alt={product.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/5" />
      <div className="relative z-10 flex h-full flex-col p-4">
        <p className="w-fit rounded-full bg-white px-3 py-2 text-sm font-semibold text-orange-600">
          {formatCurrency(product.price)}
        </p>
        <div className="mt-auto flex flex-col items-center justify-between gap-2">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white line-clamp-2">{product.title}</h3>
          </div>

          <div className="flex w-full justify-between gap-2">
            <Link
              to={`/products/${product.id}`}
              className="flex flex-row rounded-2xl bg-orange-600 px-4 py-2 text-xs text-white"
            >
              View Product
            </Link>

            <button
              type="button"
              onClick={() => handleAddToCart(product.title)}
              className="flex flex-row rounded-2xl bg-white/90 px-3 py-2 text-xs"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
