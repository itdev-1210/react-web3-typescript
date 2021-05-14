import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'web3-eth-contract'

import { useToast, useUserBeUpdate } from 'store/hooks'

// Retrieve allowance
export const useAllowance = (tokenContract: Contract, spenderAddress: string): BigNumber => {
  const { account } = useWeb3React()
  const [allowance, setAllowance] = useState(new BigNumber(0))
  const beUpdate = useUserBeUpdate()

  const { toastError } = useToast()

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await tokenContract.methods.allowance(account, spenderAddress).call()
        setAllowance(new BigNumber(res))
      } catch (e) {
        toastError(e.message)
      }
    }
    if (account) {
      fetch()
    }
    const refreshInterval = setInterval(fetch, 10000)
    return () => clearInterval(refreshInterval)

  }, [account, spenderAddress, tokenContract, toastError, beUpdate])
  return allowance
}
