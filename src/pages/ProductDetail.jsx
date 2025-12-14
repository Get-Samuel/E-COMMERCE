import { useParams, Link } from 'react-router-dom'
import { useProduct } from '../hooks/useProducts'
import useCartStore from '../store/cartStore'
import { formatCurrency } from '../utils/formatCurrency'

function ProductDetail() {
  const { id } = useParams()
  const { product, loading } = useProduct(id)

  //addToCart reference function from cartStore
  const addToCart = useCartStore((state) => state.addToCart)

  //simple loading animation
  if (loading) {
    return <div className="h-80 animate-pulse rounded-3xl bg-gray-100" />
  }

  if (!product) {
    return (
      <div className="space-y-3">
        <p className="text-lg font-semibold text-gray-900">Product not found.</p>
        <Link to="/products" className="btn-primary">
          Back to products
        </Link>
      </div>
    )
  }

  return (
    <div className="grid gap-10 sm:grid-cols-2">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gray-50 shadow-soft">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-6 transition duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
          {product.category}
        </p>
        <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
          {product.title}
        </h1>
        <p className="text-lg font-semibold text-gray-900">{formatCurrency(product.price)}</p>
        <p className="text-sm text-gray-700 leading-relaxed">{product.description}</p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="button"
            className="btn-primary"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <Link to="/products" className="rounded-full px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
            Back to all products
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

