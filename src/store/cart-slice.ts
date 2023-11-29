import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
  quantity: number
} & Product

const initialState: CartItem[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      console.log('action', action)

      const foundItem = state.find((item) => item.id === action.payload.id)

      foundItem ? foundItem.quantity++ : state.push({ ...action.payload, quantity: 1 })
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      const foundItem = state.find((item) => item.id === action.payload.id)

      if (!foundItem) return

      if (foundItem.quantity === 1) {
        const index = state.findIndex((item) => item.id === action.payload.id)
        state.splice(index, 1)
      }

      if (foundItem.quantity > 1) {
        foundItem.quantity--
      }
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
