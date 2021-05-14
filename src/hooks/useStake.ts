import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'
import { fetchUserDataAsync, setBeUpdateAsync } from 'store/actions'
import { stake } from 'utils/callHelpers'
import { useToast } from 'store/hooks'
import { useNMerchStaking } from './useContract'

const useStake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const merchContract = useNMerchStaking()

  const { toastError } = useToast()

  const handleStake = useCallback(
    async (amount: string) => {
      try {
        const txHash = await stake(merchContract, pid, amount, account)
        dispatch(fetchUserDataAsync(merchContract, account, [pid]))
        dispatch(setBeUpdateAsync())
        console.info(txHash)
      } catch (e) {
        toastError(e.message)
        return false
      }
    },
    [account, merchContract, pid, toastError, dispatch],
  )

  return { onStake: handleStake }
}

export default useStake
