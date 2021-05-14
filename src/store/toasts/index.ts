/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { ToastsState } from '../types'

const initialState: ToastsState = {
  type: '',
  title: '',
  description: '',
  call: false
}

export const toastsSlice = createSlice({
  name: 'toasts',
  initialState,
  reducers: {
    push: (state: ToastsState, action) => {
      state.type = action.payload.type
      state.title = action.payload.title
      state.description = action.payload?.description
      state.call = !state.call
    }
  },
})

// Actions
export const { push } = toastsSlice.actions

export default toastsSlice.reducer
