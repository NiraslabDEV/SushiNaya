'use client'

import Image from 'next/image'
import type { Combo } from '@/data/combos'
import { useCartStore } from '@/store/cartStore'

interface Props {
  combo: Combo
}

export default function ComboCard({ combo }: Props) {
  const addItem = useCartStore((state) => state.addItem)

  const barWidth = (combo.stock / 15) * 100

  return (
    <div className="bg-surface-container-low group overflow-hidden transition-all duration-500 hover:-translate-y-[4px]">
      <div className="h-64 overflow-hidden relative">
        <Image
          src={combo.image}
          alt={combo.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          priority={combo.id === 1}
        />
        <div className="absolute top-4 right-4 bg-[#050505]/60 backdrop-blur px-3 py-1 rounded-full">
          <span className="text-xs font-bold text-secondary">{combo.pieces} Peças</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">{combo.name}</h3>
          <span className="text-secondary font-bold text-lg">{combo.price.toLocaleString()} MT</span>
        </div>
        <p className="text-on-surface-variant text-sm mb-6 leading-snug">{combo.description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
            <span>Disponibilidade</span>
            <span>Restam {combo.stock} pedidos</span>
          </div>
          <div className="h-1 bg-surface-container-high w-full overflow-hidden">
            <div className="h-full bg-secondary" style={{ width: `${barWidth}%` }} />
          </div>
        </div>
        <button
          onClick={() => addItem(combo)}
          disabled={combo.stock === 0}
          className="w-full mt-6 py-3 border border-outline-variant/20 hover:bg-secondary hover:text-on-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors uppercase font-label text-[10px] tracking-widest font-bold"
        >
          Adicionar à Encomenda
        </button>
      </div>
    </div>
  )
}