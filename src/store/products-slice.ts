import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Product = {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
}

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
