import { combos } from '@/data/combos'
import ComboCard from './ComboCard'

export default function MenuGrid() {
  return (
    <section className="px-8 py-32 bg-background" id="menu">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 max-w-screen-2xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold tracking-tight mb-2">Seleção Omakase</h2>
          <p className="text-on-surface-variant">Combos exclusivos preparados sob medida para o seu paladar.</p>
        </div>
        <div className="text-right">
          <span className="font-label text-xs uppercase tracking-widest text-secondary">Apenas 15 slots diários</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-2xl mx-auto">
        {combos.map((combo) => (
          <ComboCard key={combo.id} combo={combo} />
        ))}
      </div>
    </section>
  )
}