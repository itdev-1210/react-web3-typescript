import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import HomeScreen from 'pages/Home';
import ShopScreen from 'pages/Shop';
import CatalogScreen from 'pages/Catalog';
import StakeScreen from 'pages/Stake';
import TopHeader from 'components/TopHeader';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ToastListener from 'components/ToastListener'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <TopHeader />
          <Header/>
          {/* Route List */}
          <Switch>
            <PublicRoute
              path="/"
              exact={true}
              component={HomeScreen}
            />
            <PublicRoute
              path="/catalog"
              exact={true}
              component={CatalogScreen}
            />
            <PublicRoute
              path="/shop"
              exact={true}
              component={ShopScreen}
            />
            <PublicRoute
              path="/stake"
              exact={true}
              component={StakeScreen}
            />
          </Switch>
          <Footer/>
          <ToastListener />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
