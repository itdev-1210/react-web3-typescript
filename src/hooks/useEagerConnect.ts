import { useEffect } from 'react'
import { ConnectorNames } from '@pancakeswap-libs/uikit'
import useAuth from 'hooks/useAuth'

const useEagerConnect = () => {
  const { login } = useAuth()

  useEffect(() => {
    const connectorId = ConnectorNames.Injected
    if (connectorId) {
      login(connectorId)
    }
  }, [login])
}

export default useEagerConnect
