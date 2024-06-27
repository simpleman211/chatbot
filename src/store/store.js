import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import brandReducer from './brandSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        brand: brandReducer
    }
  })