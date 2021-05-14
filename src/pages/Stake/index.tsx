import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Faq from 'components/Faq/Faq';

import Instruction from './components/Instruction';
import Useful from './components/Useful';

import Product1 from 'assets/Images/product-cart-1.png';
import Product1_2x from 'assets/Images/product-cart-1@x2.png';

const StakeScreen = () => {
  const location = useLocation()
  console.log(location)
  return (
    <Fragment>
      <div className="container">
        {/* BEGIN bradcramps */}
        <ul className="breadcrumbs">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/">oversized Navi x Kseniaschnaider hoodie</Link></li>
          <li className="current">Stake</li>
        </ul>
        {/* END bradcramps */}

        {/* BEGIN Nav Page Links */}
        <div className="nav-page-links__wrap">
          <nav className="nav-page-links">
            <ul>
              <li><a className={location.hash === '#product' || location.hash === '' ? "active" : ''} href="#product">Product</a></li>
              <li><a className={location.hash === '#links' ? "active" : ''} href="#links">Useful Links</a></li>
              <li><a className={location.hash === '#instruction' ? "active" : ''} href="#instruction">Instructions</a></li>
              <li><a className={location.hash === '#faq' ? "active" : ''} href="#faq">faq</a></li>
            </ul>
          </nav>
        </div>
        {/* END Nav Page Links */}
      </div>

      <div className="container container--small stake-container" id="product">
        <div className="stake-content">
          <div className="stake-content__left">
            <div className="selected-product box">
              <div className="selected-product__picture">
                <img
                  src={Product1}
                  srcSet={`${Product1} 1x, ${Product1_2x} 2x`}
                  alt=""></img>
              </div>
              <div className="selected-product__content">
                Product name
                <h2 className="selected-product__content__name">
                  <a href="#/">Oversized Navi x Kseniaschnaider Hoodie With Squares</a>
                </h2>
                <div className="selected-product__content__size">
                  Size<span>m</span>
                </div>
                <div className="selected-product__content__price">
                  <span className="price">23 000</span>
                  <div className="additional-price">
                    <div className="additional-price__coin">
                      <svg className="svg-icon" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6018 23.0531L12.7788 19.2832L14.9558 15.5266L17.1195 11.7566L17.4779 11.1593L17.6372 11.7566L18.3009 14.2389L17.5575 15.5266L15.3805 19.2832L13.2168 23.0531H15.8186L17.9956 19.2832L19.1239 17.3319L19.6549 19.2832L20.6637 23.0531H23L21.9911 19.2832L20.9823 15.5266L20.7168 14.5575L22.3363 11.7566H19.9735L19.8938 11.4779L19.0708 8.39823L18.9646 8H16.6947L16.6416 8.07965L14.5177 11.7566L12.3407 15.5266L10.177 19.2832L8 23.0531H10.6018Z"/>
                      </svg>
                    </div>
                    <div className="additional-price__price">4 350</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stake-content__right">
            <div className="card-item box">
              <div className="card-item__content">
                <h3 className="card-item__content__title">Stake without timelock</h3>
                <div className="card-item__content__offer">
                  Earn
                  <span><strong>120%</strong>apy</span>
                </div>
                <div className="card-item__content__text">Your LP tokens are locked for 30 days</div>
              </div>
              <div className="card-item__footer">
                <button type="button" className="btn-stake btn-stake--bordered">stake</button>
                <button type="button" className="btn-stake btn--outlined">unstake</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Useful></Useful>
      <Instruction></Instruction>
      <Faq></Faq>
    </Fragment>
  );
};

export default StakeScreen;
