import addresses from 'config/constants/contracts'
import { Address } from 'config/constants/types'

export const getAddress = (address: Address): string => {
  const mainNetChainId = 1
  const chainId = process.env.REACT_APP_CHAIN_ID
  return address[chainId] ?? address[mainNetChainId]
}

export const getMrchAddress = () => {
  return getAddress(addresses.mrch)
}
export const getMerchNStakingAddress = () => {
  return getAddress(addresses.merchNStaking)
}
export const getNFTAddress = () => {
  return getAddress(addresses.nft)
}