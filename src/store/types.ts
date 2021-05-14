import BigNumber from 'bignumber.js'
import { PoolConfig } from 'config/constants/types'

export interface HeaderState {
  isOpen: boolean
}

export interface ToastsState {
  type: string,
  title: string,
  description?: string,
  call: boolean
}

export interface User extends PoolConfig {
  userData?: {
    stakedBalance: BigNumber
    earnings: BigNumber
  }
}

export interface UserState {
  data: User[],
  beUpdate?: boolean
}
export interface State {
  toasts: ToastsState,
  user: UserState,
}