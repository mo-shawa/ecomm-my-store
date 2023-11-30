import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart-slice'
import selectedProductReducer from './selected-product-slice'
import { api } from '@/services/product'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartReducer,
    selectedProduct: selectedProductReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
