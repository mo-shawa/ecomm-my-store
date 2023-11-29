import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products-slice'
import cartReducer from './cart-slice'
import selectedProductReducer from './selected-product-slice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    selectedProduct: selectedProductReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
