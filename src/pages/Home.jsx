import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import ProductCard from '../components/ProductCard'
import { useProducts } from '../hooks/useProducts'

function Home() {
  const { products, loading } = useProducts()
  const featured = products.slice(0, 5)
  const curated = products.slice(5, 9)

  return (
    <div className="space-y-10">

      {loading ? (
        <div className="h-72 animate-pulse rounded-3xl bg-gray-100" />
      ) : (
        <HeroSlider products={featured} />
      )}

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Curated picks</h2>
          <Link
            to="/products"
            className="text-sm font-semibold text-orange-600 transition hover:underline"
          >
            View all
          </Link>
        </div>
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="aspect-[4/5] animate-pulse rounded-2xl bg-gray-100" />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {curated.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Home

