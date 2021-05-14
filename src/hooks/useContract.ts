import { useMemo } from 'react'
import useWeb3 from 'hooks/useWeb3'
import {
  getErc20Contract,
  getMerchNStakingContract
} from 'utils/contractHelpers'

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getErc20Contract(address, web3), [address, web3])
}

export const useNMerchStaking = () => {
  const web3 = useWeb3()
  return useMemo(() => getMerchNStakingContract(web3), [web3])
}
