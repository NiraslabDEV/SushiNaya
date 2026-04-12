'use client'

import { useCartStore } from '@/store/cartStore'

export default function FloatingCartBadge() {
  const { items } = useCartStore()
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.combo.price * item.quantity, 0)

  const scrollToCheckout = () => {
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <button 
        onClick={scrollToCheckout}
        className="flex items-center gap-3 bg-secondary p-4 rounded-full shadow-[0px_20px_40px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform group"
      >
        <div className="relative">
          <span className="material-symbols-outlined text-on-secondary">shopping_cart</span>
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-on-secondary text-secondary text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </div>
        <span className="font-bold text-on-secondary pr-2">{totalPrice.toLocaleString()} MT</span>
      </button>
    </div>
  )
}