'use client'

import { useState, useEffect } from 'react'
import { useCartStore } from '@/store/cartStore'

export default function CheckoutSection() {
  const { items, clearCart } = useCartStore()
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.combo.price * item.quantity, 0)
  const sinal = totalPrice * 0.5

  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  })
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    const now = new Date()
    const selected = new Date(`${form.date}T${form.time}`)
    const diff = selected.getTime() - now.getTime()
    const isMin2h = diff >= 2 * 60 * 60 * 1000
    setIsValid(!!(form.name && form.phone && form.date && form.time && totalPrice >= 1150 && isMin2h))
  }, [form, totalPrice])

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de encomendar:

${items.map(item => `${item.quantity}x ${item.combo.name} (${item.combo.pieces} peças) - ${ (item.combo.price * item.quantity).toLocaleString() } MT`).join('\n')}

Subtotal: ${totalPrice.toLocaleString()} MT
Sinal 50%: ${sinal.toLocaleString()} MT

Dados:
Nome: ${form.name}
Telefone: ${form.phone}
Data: ${form.date}
Horário: ${form.time}

Pagamento via E-mola: 87 880 5603 (Yuznick)
Aguardo confirmação!`

    const phone = '258846889389'
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section className="px-8 py-32 bg-surface-container-lowest" id="checkout">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Seus Detalhes</h2>
              <p className="text-on-surface-variant text-sm">Preencha para iniciarmos seu preparo exclusivo.</p>
            </div>
            <div className="space-y-8">
              <div className="relative group">
                <input
                  className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-secondary transition-colors text-lg placeholder:text-on-surface-variant/40"
                  placeholder="Seu Nome Completo"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-focus-within:w-full" />
              </div>
              <div className="relative group">
                <input
                  className="w-full bg-transparent border-b border-outline-variant/30 py-3 focus:outline-none focus:border-secondary transition-colors text-lg placeholder:text-on-surface-variant/40"
                  placeholder="Telefone / WhatsApp"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-secondary transition-all duration-300 group-focus-within:w-full" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Data da Entrega</label>
                  <input
                    className="w-full bg-surface-container-low border-none p-3 rounded-md focus:ring-1 focus:ring-secondary text-sm"
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Horário</label>
                  <input
                    className="w-full bg-surface-container-low border-none p-3 rounded-md focus:ring-1 focus:ring-secondary text-sm"
                    type="time"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary/5 border border-secondary/10 rounded-lg">
                <span className="material-symbols-outlined text-secondary text-sm">info</span>
                <p className="text-xs text-secondary/80 leading-tight">Nota: Aceitamos encomendas com no mínimo 2h de antecedência para garantir o frescor absoluto.</p>
              </div>
            </div>
          </div>
          {/* Resumo */}
          <div className="bg-surface-container p-8 rounded-lg space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-9xl">receipt_long</span>
            </div>
            <h3 className="text-xl font-bold tracking-tight">Resumo da Encomenda</h3>
            <div className="space-y-4 border-b border-outline-variant/10 pb-6">
              {items.map((item) => (
                <div key={item.combo.id} className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">{item.quantity}x {item.combo.name} ({item.combo.pieces} peças)</span>
                  <span>{(item.combo.price * item.quantity).toLocaleString()} MT</span>
                </div>
              ))}
              <div className="flex justify-between font-bold text-lg pt-4">
                <span>Subtotal</span>
                <span className="text-secondary">{totalPrice.toLocaleString()} MT</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-background/50 rounded-md border border-outline-variant/10">
                <p className="font-label text-[10px] uppercase tracking-[0.1em] text-on-surface-variant mb-2">Para Confirmar</p>
                <p className="text-xl font-bold text-primary">Pague 50% ({sinal.toLocaleString()} MT)</p>
                <div className="mt-4 pt-4 border-t border-outline-variant/10">
                  <p className="text-xs text-on-surface-variant mb-1">Pagamento via E-mola:</p>
                  <p className="text-lg font-mono font-bold text-secondary">87 880 5603 <span className="text-xs font-normal text-on-surface-variant opacity-60">(Yuznick)</span></p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <button
                onClick={handleWhatsApp}
                disabled={!isValid || totalItems === 0}
                className="w-full bg-secondary text-on-secondary py-5 rounded-md font-extrabold text-sm uppercase tracking-widest hover:scale-[1.01] transition-transform flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Finalizar Encomenda via WhatsApp
                <span className="material-symbols-outlined">send</span>
              </button>
              <p className="text-[10px] text-center text-on-surface-variant/40 italic">O seu pedido gerará o ID automático #101</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}