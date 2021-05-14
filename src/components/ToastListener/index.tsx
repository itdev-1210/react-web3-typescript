import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { State } from 'store/types'

const ToastListener = () => {
  const toasts = useSelector((state: State) => state.toasts)

  useEffect(() => {
    switch(toasts.type){
      case 'Success':
        toast.success(toasts.title)
        break;
      case 'Warning':
        toast.warning(toasts.title)
        break;
      case 'Error':
        toast.error(toasts.title)
        break;
      case 'Info':
        toast.info(toasts.title)
        break;
    }
  }, [toasts])

  return <ToastContainer/>
}

export default ToastListener
