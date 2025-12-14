import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Link } from 'react-router-dom'

function HeroSlider({ products }) {
  if (!products?.length) return null

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-100 shadow-soft">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false, reverseDirection: false }}
        pagination={{ clickable: true }}
        loop
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="grid items-center gap-8 bg-white px-6 py-10 sm:grid-cols-2 sm:px-10">
              <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                  Featured
                </p>
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-4">{product.description}</p>
                <div className="mt-auto">
                  <Link to={`/products/${product.id}`} className="btn-primary">
                    View Product
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSlider

