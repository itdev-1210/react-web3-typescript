import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'
import { unstake } from 'utils/callHelpers'
import { useToast } from 'store/hooks'
import { fetchUserDataAsync, setBeUpdateAsync } from 'store/actions'
import { useNMerchStaking } from './useContract'

const useUnstake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const merchContract = useNMerchStaking()
  const { toastError } = useToast()

  const handleUnstake = useCallback(
    async () => {
      try {
        const txHash = await unstake(merchContract, pid, account)
        dispatch(fetchUserDataAsync(merchContract, account, [pid]))
        dispatch(setBeUpdateAsync())
        console.info(txHash)
      } catch (e) {
        toastError(e.message)
        return false
      }
    },
    [account, dispatch, merchContract, pid, toastError],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
