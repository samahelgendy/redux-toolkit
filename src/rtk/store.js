import { configureStore } from '@reduxjs/toolkit'
import productCart from './products/product-cart'
import  productSlice  from './products/product-slice'

export const store = configureStore({
  reducer: {
    products :productSlice,
    cart: productCart,
  },
})