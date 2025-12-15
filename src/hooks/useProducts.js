import { useEffect, useState } from 'react'

const API_BASE = 'https://fakestoreapi.com'

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    fetch(`${API_BASE}/products`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setProducts(data)
      })
      .catch((err) => isMounted && setError(err))
      .finally(() => isMounted && setLoading(false))

    return () => {
      isMounted = false
    }
  }, [])

  return { products, loading, error }
}

export function useProduct(id) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return
    let isMounted = true
    setLoading(true)
    fetch(`${API_BASE}/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setProduct(data)
      })
      .catch((err) => isMounted && setError(err))
      .finally(() => isMounted && setLoading(false))

    return () => {
      isMounted = false
    }
  }, [id])

  return { product, loading, error }
}


