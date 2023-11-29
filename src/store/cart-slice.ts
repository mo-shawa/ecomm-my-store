import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    console.error(err)
  }
}

const initialState: CartItem[] = loadInitialState()

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addOneToCart: (state, action: PayloadAction<Product>) => {
      const foundItem = state.find((item) => item.id === action.payload.id)

      foundItem
        ? foundItem.quantity++
        : state.push({ ...action.payload, quantity: 1 })

      saveState(state)
    },

    setAmountOfItemInCart: (
      state,
      action: PayloadAction<{ id: number; amount: number }>
    ) => {
      const foundItem = state.find((item) => item.id === action.payload.id)

      if (!foundItem) return

      foundItem.quantity = action.payload.amount

      saveState(state)
    },

    removeOneFromCart: (state, action: PayloadAction<CartItem>) => {
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
    removeAllOfItemFromCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.findIndex((item) => item.id === action.payload.id)
      state.splice(index, 1)
      saveState(state)
    },
    emptyCart: () => {
      localStorage.removeItem('cart')
      return []
    },
  },
})

export const {
  addOneToCart,
  removeOneFromCart,
  removeAllOfItemFromCart,
  emptyCart,
} = cartSlice.actions

export default cartSlice.reducer
