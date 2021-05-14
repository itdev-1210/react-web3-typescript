import BigNumber from 'bignumber.js'
import { getMerchNStakingAddress } from 'utils/addressHelpers'

export const fetchUserAllowances = async (contract, account: string) => {
  const merchNStakingAddress = getMerchNStakingAddress()
  const res = await contract.methods.allowance(account, merchNStakingAddress).call()

  return (new BigNumber(res)).toJSON()
}

export const fetchUserStakedBalance = async (contract, account: string, pid) => {
  const res = await contract.methods.stakes(pid, account).call()

  return (new BigNumber(res.amount)).toJSON()
}

export const fetchUserEarning = async (contract, account: string, pid) => {
  const res = await contract.methods.currentReward(pid, account).call()
  return (new BigNumber(res)).toJSON()
}
