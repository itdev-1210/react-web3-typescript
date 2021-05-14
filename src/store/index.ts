import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './header'
import toastsReducer from './toasts'
import userReducer from './user'

export default configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    header: headerReducer,
    toasts: toastsReducer,
    user: userReducer
  },
})
