import { createSlice, PayloadAction } from '@reduxjs/toolkit'
type CartItem = {
  quantity: number
} & Product

const loadInitialState = () => {
  try {
    const serializedState = localStorage.getItem('cart')
    if (serializedState === null) {
      return []
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return []
  }
}

const saveState = (state: CartItem[]) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('cart', serializedState)
  } catch (err) {
    console.log(err)
  }
}

const initialState: CartItem[] = loadInitialState()

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      console.log('action', action)

      const foundItem = state.find((item) => item.id === action.payload.id)

      foundItem
        ? foundItem.quantity++
        : state.push({ ...action.payload, quantity: 1 })

      saveState(state)
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

      saveState(state)
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
