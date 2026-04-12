import { create } from 'zustand'
import type { Combo } from '@/data/combos'

interface CartItem {
  combo: Combo
  quantity: number
}

interface CartState {
  items: CartItem[]
  addItem: (combo: Combo) => void
  removeItem: (comboId: number) => void
  updateQuantity: (comboId: number, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addItem: (combo) => set((state) => {
    const existing = state.items.find(item => item.combo.id === combo.id);
    if (existing) {
      return {
        items: state.items.map(item =>
          item.combo.id === combo.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    }
    return { items: [...state.items, { combo, quantity: 1 }] };
  }),

  removeItem: (comboId) => set((state) => ({
    items: state.items.filter(item => item.combo.id !== comboId)
  })),
  updateQuantity: (comboId, quantity) => set((state) => ({
    items: state.items.map(item => 
      item.combo.id === comboId ? { ...item, quantity } : item
    ).filter(item => item.quantity > 0)
  })),
  clearCart: () => set({ items: [] }),
}))