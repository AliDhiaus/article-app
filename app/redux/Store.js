import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './slices/DataSlice'
import userReducer from './slices/UserSlice'
import uiSlice from './slices/UiSlice'

export const store = configureStore({
  reducer: {
    data: dataReducer,
    user: userReducer,
    ui: uiSlice,
  },
})
