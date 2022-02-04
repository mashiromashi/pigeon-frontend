import { configureStore } from '@reduxjs/toolkit'
import articleSlice from './slice/articleSlice'
import loginSlice from './slice/loginSlice'
import productSlice from './slice/productSlice'

export const store = configureStore({
    reducer: {
        login: loginSlice,
        product: productSlice,
        article: articleSlice
    },
})