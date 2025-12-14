import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      addToCart: (product) =>
        set((state) => {
          const existing = state.cartItems.find((item) => item.id === product.id)
          if (existing) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            }
          }
          return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] }
        }),
      removeFromCart: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ cartItems: [] }),
      total: () =>
        get().cartItems.reduce(
          (sum, item) => sum + item.price * (item.quantity || 1),
          0,
        ),
    }),
    {
      name: 'ecom-cart',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useCartStore

