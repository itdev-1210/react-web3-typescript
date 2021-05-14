import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import web3NoAccount from 'utils/web3'
// import { poolsConfig } from 'config/constants'
// import { PoolCategory } from 'config/constants/types'

// Addresses
import {
  // getAddress,
  // getLpAddress,
  // getMrchAddress,
  getMerchNStakingAddress,
} from 'utils/addressHelpers'

// ABI
import merchNStakingAbi from 'config/abi/merchNStaking.json'
import erc20Abi from 'config/abi/erc20.json'

const getContract = (abi: any, address: string, web3?: Web3) => {
  const _web3 = web3 ?? web3NoAccount
  return new _web3.eth.Contract((abi as unknown) as AbiItem, address)
}

export const getErc20Contract = (address: string, web3?: Web3) => {
  return getContract(erc20Abi, address, web3)
}

export const getMerchNStakingContract = (web3?: Web3) => {
  return getContract(merchNStakingAbi, getMerchNStakingAddress(), web3)
}
