import { configureStore } from '@reduxjs/toolkit'
import loadUserSlice from './slices/loadUserSlice'
import routeChangeSlice  from './slices/routeSlice'
import displaySlice from './slices/displaySlice'
import cartItemsTotalSlice from './slices/cartItemsTotalSlice'
export const store = configureStore({
  reducer: {
    loadUser:loadUserSlice,
    routeChange:routeChangeSlice,
    changeDisplay:displaySlice,
    changeCartTotal:cartItemsTotalSlice,

  },
}) 