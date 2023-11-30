import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Product[] = []

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setInitialProducts: (_, action: PayloadAction<Product[]>) => action.payload,
    addPageOfProducts: (state, action: PayloadAction<Product[]>) => [
      ...state,
      ...action.payload,
    ],
  },
})

export const { setInitialProducts, addPageOfProducts } = productsSlice.actions

export default productsSlice.reducer
