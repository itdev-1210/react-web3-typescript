import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'web3-eth-contract'
import { useDispatch } from 'react-redux'
import { approve } from 'utils/callHelpers'
import { useNMerchStaking } from './useContract'
import { useToast } from 'store/hooks'
import { setBeUpdateAsync } from 'store/actions'

// Approve 
export const useApprove = (lpContract: Contract) => {
  const { account } = useWeb3React()
  const merchNStakingContract = useNMerchStaking()
  const dispatch = useDispatch()

  const { toastError } = useToast()

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(lpContract, merchNStakingContract, account)
      dispatch(setBeUpdateAsync())
      return tx
    } catch (e) {
      toastError(e.message)
      return false
    }
  }, [account, lpContract, merchNStakingContract, toastError, dispatch])

  return { onApprove: handleApprove }
}

