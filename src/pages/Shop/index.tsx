import { Link, useLocation, useHistory } from 'react-router-dom';

import Faq from 'components/Faq/Faq';
import ProductSlider from 'components/Product/Slider';
import { ProductData } from 'components/Product/Types';

import Plans from './components/Plans';
import ShopSlider from './components/Slider';

import Product1 from 'assets/Images/product-cart-1.png';
import Product1_2x from 'assets/Images/product-cart-1@x2.png';
import Product2 from 'assets/Images/product-cart-2.png';
import Product2_2x from 'assets/Images/product-cart-2@x2.png';
import Product3 from 'assets/Images/product-cart-3.png';
import Product3_2x from 'assets/Images/product-cart-3@x2.png';
import Product4 from 'assets/Images/product-cart-4.png';
import Product4_2x from 'assets/Images/product-cart-4@x2.png';


const populars:ProductData[] =[
  {
    text: "oversized navi x kseniaschnaider hoodle with squares",
    price: '15000',
    asset: Product1,
    asset2x: Product1_2x
  },
  {
    text: "OVERSIZED NAVI X KSENIASCHNAIDER HOODIE WITH SLOGANS",
    price: '12000',
    asset: Product2,
    asset2x: Product2_2x
  },
  {
    text: "T-SHIRT NAVI X ICEBERG",
    price: '9025',
    asset: Product3,
    asset2x: Product3_2x,
    additional: '4350'
  },
  {
    text: "oversized navi x kseniaschnaider hoodle with squares",
    price: '11000',
    asset: Product4,
    asset2x: Product4_2x,
    additional: '4350'
  },
  {
    text: "oversized navi x kseniaschnaider hoodle with squares",
    price: '15000',
    asset: Product1,
    asset2x: Product1_2x
  },
  {
    text: "OVERSIZED NAVI X KSENIASCHNAIDER HOODIE WITH SLOGANS",
    price: '12000',
    asset: Product2,
    asset2x: Product2_2x
  },
  {
    text: "T-SHIRT NAVI X ICEBERG",
    price: '9025',
    asset: Product3,
    asset2x: Product3_2x,
    additional: '4350'
  },
  {
    text: "oversized navi x kseniaschnaider hoodle with squares",
    price: '11000',
    asset: Product4,
    asset2x: Product4_2x,
    additional: '4350'
  }
]

const ShopScreen = () => {
  const history = useHistory()
  const location = useLocation()

  return (
    <>
    <div className="container">
      {/* BEGIN bradcramps */}
      <ul className="breadcrumbs">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li className="current">oversized Navi x Kseniaschnaider hoodie</li>
      </ul>
      {/* END bradcramps */}

      {/* BEGIN Nav Page Links */}
      <div className="nav-page-links__wrap">
        <nav className="nav-page-links">
          <ul>
            <li><a className={location.hash === '#product' || location.hash === '' ? "active" : ''} href="#product">Product</a></li>
            <li><a className={location.hash === '#plans' ? "active" : ''} href="#plans">Plans</a></li>
            <li><a className={location.hash === '#faq' ? "active" : ''} href="#faq">faq</a></li>
          </ul>
        </nav>
      </div>
      {/* END Nav Page Links */}
    </div>

    <main className="product-wrap" id="product">
      <div className="container">
        <div className="product-content">
          <ShopSlider></ShopSlider>
          <div className="product-description">
            <h1 className="product-description__title">OVERSIZED NAVI X KSENIASCHNAIDER HOODIE</h1>
            <p className="product-description__text">Fusce suscipit feugiat tristique. Nullam dictum, risus sit amet imperdiet imperdiet, lectus diam tincidunt eros, non ultricies quam dui vitae libero. Duis tellus diam, varius id elit quis, placerat feugiat lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            <div className="radio-list">
              Size
              <div className="radio">
                <label>
                  <input name="size" type="radio" value="small" /> s
                </label>
              </div>
              <div className="radio">
                <label>
                  <input name="size" type="radio" value="middle" /> m
                </label>
              </div>
              <div className="radio">
                <label>
                  <input name="size" type="radio" value="large" /> l
                </label>
              </div>
            </div>
            <div className="product-description__price">
              <div className="product-description__price__label">From</div>
              <span className="price">10 000</span>
              <div className="additional-price">
                <div className="additional-price__coin">
                  <svg className="svg-icon" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6018 23.0531L12.7788 19.2832L14.9558 15.5266L17.1195 11.7566L17.4779 11.1593L17.6372 11.7566L18.3009 14.2389L17.5575 15.5266L15.3805 19.2832L13.2168 23.0531H15.8186L17.9956 19.2832L19.1239 17.3319L19.6549 19.2832L20.6637 23.0531H23L21.9911 19.2832L20.9823 15.5266L20.7168 14.5575L22.3363 11.7566H19.9735L19.8938 11.4779L19.0708 8.39823L18.9646 8H16.6947L16.6416 8.07965L14.5177 11.7566L12.3407 15.5266L10.177 19.2832L8 23.0531H10.6018Z"/>
                  </svg>
                </div>
                <div className="additional-price__price">4 350</div>
              </div>
            </div>
            <button type="button" className="btn-stake btn-stake--bordered" onClick={()=>history.push('/stake')}>Choose plan & stake</button>
          </div>
        </div>
      </div>
    </main>
    <Plans></Plans>
    <ProductSlider title="Related products" list={populars}/>
    <Faq></Faq>
    </>
  );
};

export default ShopScreen;
