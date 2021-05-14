/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import poolConfig from 'config/constants/pools'

import {
  fetchUserStakedBalance,
  fetchUserEarning,
} from './fetchUser'
import { UserState } from '../types'

const initialState: UserState = { data: [...poolConfig], beUpdate: true }

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { arrayOfUserDataObjects } = action.payload
      arrayOfUserDataObjects.forEach((userDataEl) => {
        const { index } = userDataEl
        state.data[index] = { ...state.data[index], userData: userDataEl }
      })
    },
    setBeUpdate: (state) => {
      state.beUpdate = !state.beUpdate
    }
  },
})

// Actions
export const { setUserData, setBeUpdate } = userSlice.actions

// Thunks
export const fetchUserDataAsync = (contract, account, pids) => async (dispatch) => {
  const userStakedBalances = []
  const userEarnings = []
  for(let i = 0; i < pids.length; i++) {
    const userStakedBalance = await fetchUserStakedBalance(contract, account, pids[i])
    userStakedBalances.push(userStakedBalance)
    const userEarning = await fetchUserEarning(contract, account, pids[i])
    userEarnings.push(userEarning)
  }

  const arrayOfUserDataObjects = userStakedBalances.map((stakedBalance, index) => {
    return {
      index,
      stakedBalance: userStakedBalances[index],
      earnings: userEarnings[index],
    }
  })

  dispatch(setUserData({ arrayOfUserDataObjects }))
}

export const setBeUpdateAsync = () => (dispatch) => {
  dispatch(setBeUpdate())
}

export default userSlice.reducer
