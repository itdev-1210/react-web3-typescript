import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  setHeaderModalOpen,
  push as pushToast
} from './actions'

// Header

export const useHeader = () => {
  const { isOpen } = useSelector((state: any) => state.header)
  return { isOpen }
}

export const useFetchHeader = () => {
  const dispatch = useDispatch()
  const helpers = useMemo(() => {
    return {
      setOpen: (open: boolean) => dispatch(setHeaderModalOpen(open))
    }
  }, [dispatch])

  return helpers
}

export const useUserFromPid = (pid) => {
  const user = useSelector((state: any) => state.user.data.find((f) => f.id === pid))
  return user
}

export const useUserBeUpdate = () => {
  const { beUpdate } = useSelector((state: any) => state.user)
  return beUpdate
}

// Toasts
export const useToast = () => {
  const dispatch = useDispatch()
  const helpers = useMemo(() => {
    const push = (toast: any) => dispatch(pushToast(toast))

    return {
      toastError: (title: string, description?: string) => {
        return push({ type: 'Error', title, description })
      },
      toastInfo: (title: string, description?: string) => {
        return push({ type: 'Info', title, description })
      },
      toastSuccess: (title: string, description?: string) => {
        return push({ type: 'Success', title, description })
      },
      toastWarning: (title: string, description?: string) => {
        return push({ type: 'Warning', title, description })
      },
      push
    }
  }, [dispatch])

  return helpers
}