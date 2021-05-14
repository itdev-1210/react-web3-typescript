/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { HeaderState } from '../types'

const initialState: HeaderState = { 
  isOpen: false
}

export const headerSlice = createSlice({
  name: 'Header',
  initialState,
  reducers: {
    setHeaderModalOpen: (state, action) => {
      state.isOpen = action.payload
    }
  },
})

// Actions
export const { setHeaderModalOpen } = headerSlice.actions

export default headerSlice.reducer
