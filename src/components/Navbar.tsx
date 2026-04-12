'use client'

import { useCartStore } from '@/store/cartStore'

export default function Navbar() {
  const { items } = useCartStore()
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="fixed top-0 w-full bg-[#050505]/80 backdrop-blur-xl z-50 border-b border-surface-container-high">
      <div className="max-w-screen-2xl mx-auto px-8 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Sushi da Naya</div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="font-label text-[0.75rem] uppercase tracking-[0.05em] text-primary font-semibold border-b border-secondary pb-1" href="#menu">Menu</a>
          <a className="font-label text-[0.75rem] uppercase tracking-[0.05em] text-on-surface hover:text-secondary transition-colors duration-300" href="#experience">Experience</a>
          <a className="font-label text-[0.75rem] uppercase tracking-[0.05em] text-on-surface hover:text-secondary transition-colors duration-300" href="#reservations">Reservations</a>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary">schedule</span>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/15">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-semibold text-on-surface-variant">Aberto para Encomendas</span>
          </div>
          <div className="relative">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">shopping_cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-on-secondary text-secondary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}