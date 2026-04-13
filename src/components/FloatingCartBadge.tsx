'use client'

import { useState } from 'react'
import { useCartStore } from '@/store/cartStore'

export default function FloatingCartBadge() {
  const [open, setOpen] = useState(false)
  const { items, updateQuantity, removeItem } = useCartStore()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = items.reduce((sum, item) => sum + item.combo.price * item.quantity, 0)
  const deposit = Math.ceil(subtotal * 0.5)

  const scrollToCheckout = () => {
    setOpen(false)
    setTimeout(() => {
      document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })
    }, 200)
  }

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[59] bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed bottom-0 right-0 z-[61] h-full max-h-[90vh] w-full max-w-sm bg-[#1c1b1b] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: 'auto', borderRadius: '16px 0 0 0' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">shopping_cart</span>
            <h2 className="text-lg font-bold text-[#e5e2e1]">A tua encomenda</h2>
            {totalItems > 0 && (
              <span className="bg-secondary text-on-secondary text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-[#a5a2a1] hover:text-[#e5e2e1] transition-colors"
            aria-label="Fechar"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center py-16">
              <span className="material-symbols-outlined text-5xl text-[#3a3939]">
                shopping_cart
              </span>
              <p className="text-[#a5a2a1] text-sm">O carrinho está vazio.</p>
              <p className="text-[#6b6967] text-xs">Adiciona combos do menu acima.</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.combo.id}
                className="flex gap-3 bg-[#131313] rounded-xl p-3"
              >
                {/* Image */}
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-[#2a2929]">
                  <img
                    src={item.combo.image}
                    alt={item.combo.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-[#e5e2e1] font-semibold text-sm truncate">{item.combo.name}</p>
                  <p className="text-[#a5a2a1] text-xs mt-0.5">{item.combo.pieces} peças</p>
                  <p className="text-secondary font-bold text-sm mt-1">
                    {(item.combo.price * item.quantity).toLocaleString()} MT
                  </p>
                </div>

                {/* Controls */}
                <div className="flex flex-col items-end justify-between gap-1">
                  <button
                    onClick={() => removeItem(item.combo.id)}
                    className="text-[#6b6967] hover:text-red-400 transition-colors"
                    aria-label="Remover item"
                  >
                    <span className="material-symbols-outlined text-base">delete</span>
                  </button>
                  <div className="flex items-center gap-1 bg-[#2a2929] rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.combo.id, item.quantity - 1)}
                      className="w-7 h-7 flex items-center justify-center text-[#a5a2a1] hover:text-secondary transition-colors"
                      aria-label="Diminuir quantidade"
                    >
                      <span className="material-symbols-outlined text-base">remove</span>
                    </button>
                    <span className="text-[#e5e2e1] font-bold text-sm w-5 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.combo.id, item.quantity + 1)}
                      className="w-7 h-7 flex items-center justify-center text-[#a5a2a1] hover:text-secondary transition-colors"
                      aria-label="Aumentar quantidade"
                    >
                      <span className="material-symbols-outlined text-base">add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary */}
        {items.length > 0 && (
          <div className="px-6 pb-8 pt-4 border-t border-white/10 space-y-3">
            <div className="flex justify-between text-sm text-[#a5a2a1]">
              <span>Subtotal</span>
              <span className="text-[#e5e2e1] font-semibold">{subtotal.toLocaleString()} MT</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#a5a2a1]">Sinal 50% (E-mola)</span>
              <span className="text-secondary font-bold">{deposit.toLocaleString()} MT</span>
            </div>
            <div className="text-xs text-[#6b6967] bg-[#131313] rounded-lg px-3 py-2">
              Pagamento: <span className="text-[#a5a2a1]">87 880 5603 (Yuznick)</span>
            </div>
            <button
              onClick={scrollToCheckout}
              className="w-full bg-secondary text-on-secondary font-bold py-3 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all text-sm tracking-wide"
            >
              FINALIZAR ENCOMENDA
            </button>
          </div>
        )}
      </div>

      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-[62]">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-3 bg-secondary p-4 rounded-full shadow-[0px_20px_40px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-transform"
          aria-label="Abrir carrinho"
        >
          <div className="relative">
            <span className="material-symbols-outlined text-on-secondary">shopping_cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-on-secondary text-secondary text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          {totalItems > 0 && (
            <span className="font-bold text-on-secondary pr-2">{subtotal.toLocaleString()} MT</span>
          )}
        </button>
      </div>
    </>
  )
}
