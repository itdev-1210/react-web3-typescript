import AppRouter from './routers/AppRouter';
import useEagerConnect from 'hooks/useEagerConnect';

const App = () => {
  useEagerConnect()
  return (<AppRouter />)
}

export default App
