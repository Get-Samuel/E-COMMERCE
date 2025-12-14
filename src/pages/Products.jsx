import ProductCard from '../components/ProductCard'
import { useProducts } from '../hooks/useProducts'

function Products() {
  const { products, loading } = useProducts()

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
          Catalog
        </p>
        <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">All Products</h1>
      </div>

      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="aspect-[4/5] animate-pulse rounded-2xl bg-gray-100" />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Products

