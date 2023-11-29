import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Product[] = []

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (_, action: PayloadAction<Product[]>) => action.payload,
  },
})

export const { setProducts } = productsSlice.actions

export default productsSlice.reducer
