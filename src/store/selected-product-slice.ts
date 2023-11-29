import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Product | null = null

const selectedSlice = createSlice({
  name: 'selectedProduct',
  initialState,
  reducers: {
    setSelectedProduct: (_, action) => action.payload,
  },
})

export const { setSelectedProduct } = selectedSlice.actions

export default selectedSlice.reducer
