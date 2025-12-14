import { Link } from 'react-router-dom'
import useCartStore from '../store/cartStore'
import { formatCurrency } from '../utils/formatCurrency'

function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-50 card-hover">
      <img
        src={product.image}
        alt={product.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/5" />
      <div className="relative z-10 flex h-full flex-col p-4">
        <p className="text-sm font-semibold bg-white w-fit py-2 px-3 text-orange-600 rounded-full">${product.price}</p>
        <div className="flex flex-col mt-auto items-center justify-between gap-2">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white line-clamp-2">{product.title}</h3>
          </div>

          <div className='flex justify-between w-full gap-2'>
            <Link
            to={`/products/${product.id}`}
            className="bg-orange-600 text-white flex flex-row text-xs py-2 px-4 rounded-2xl"
          >
            View Product
          </Link>
          <button
            type="button"
            onClick={() => addToCart(product)}
            className=" bg-white/90 flex flex-row text-xs py-2 px-3 rounded-2xl"
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

