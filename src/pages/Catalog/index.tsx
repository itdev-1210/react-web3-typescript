import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';

import Product from 'components/Product/Product';
import { ProductData } from 'components/Product/Types';

import Product1 from 'assets/Images/product-cart-1.png';
import Product1_2x from 'assets/Images/product-cart-1@x2.png';
import Product2 from 'assets/Images/product-cart-2.png';
import Product2_2x from 'assets/Images/product-cart-2@x2.png';
import Product3 from 'assets/Images/product-cart-3.png';
import Product3_2x from 'assets/Images/product-cart-3@x2.png';
import Product4 from 'assets/Images/product-cart-4.png';
import Product4_2x from 'assets/Images/product-cart-4@x2.png';
import Logo from 'assets/Images/logo.svg';

import { useFetchHeader } from 'store/hooks';

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

const CatalogScreen = () => {
  const [psValue, setPsValue] = useState('raise');
  const [catalogShow, setCatalogShow] = useState(false);
  const [filterShow, setFilterShow] = useState(false);

  const { setOpen } = useFetchHeader();

  return (
    <>
    <div className="container">
      {/* BEGIN bradcramps */}
      <ul className="breadcrumbs">
        <li><Link to="/#">Home</Link></li>
        <li className="current">Shop</li>
      </ul>
      {/* END bradcramps */}
    </div>

    <div className="container">
      <div className="row">
        <div className="col-xl-9 order-2">
          <div className="catalog-settings">
            <button type="button" className="btn-stake btn--black" data-toggle="modal" data-target="#modal-catalog" onClick={() => setCatalogShow(true)}>Catalog</button>

            <div className="ps">
              <div className="ps__label">price</div>

              <div className="ps-value">
                price
                <span>Low to high</span>
                <i className="ps-value__icon"></i>

                <div className="ps-value__space"></div>
              </div>

              <ul className="ps-options">
                <li data-value="raise" className={psValue === 'raise' ? "ps-selected" : ''} onClick={() => setPsValue('raise')}>Low to high</li>
                <li data-value="lower" className={psValue === 'lower' ? "ps-selected" : ''} onClick={() => setPsValue('lower')}>high to low</li>
              </ul>

              <input type="hidden" name="select" value="1000000"/>
            </div>

            <button type="button" className="btn-stake btn--outlined btn--filter" data-toggle="modal" data-target="#modal-filters" onClick={() => setFilterShow(true)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6667 2H1.33337L6.66671 8.30667V12.6667L9.33337 14V8.30667L14.6667 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>filter
            </button>
          </div>

          <main className="catalog-list">
            {populars.map((item, index) => <div className="catalog-list__item col" key={index}>
              <Product data={item}></Product>
            </div>)}
          </main>

          <div className="pagination-wrap">
            <button type="button" className="btn-stake btn--outlined">Show more</button>

            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#/">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
              <li className="page-item"><a className="page-link" href="#/">1</a></li>
              <li className="page-item active"><a className="page-link" href="#/">2</a></li>
              <li className="page-item"><a className="page-link" href="#/">3</a></li>
              <li className="page-item"><a className="page-link" href="#/">4</a></li>
              <li className="page-item">
                <a className="page-link" href="#/">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-none d-xl-block col-xl-3">
          <aside>
            <div className="box-gray mb-4">
              <h4 className="small-title text-capitalize mb-20">Catalog</h4>
              <ul className="category-list">
                <li className="active"><a href="#/">Hoodies</a></li>
                <li><a href="#/">T-Shirts</a></li>
                <li><a href="#/">Pants</a></li>
                <li><a href="#/">Accessories</a></li>
              </ul>
            </div>
            <div className="box-gray mb-4">
              <h4 className="small-title text-capitalize mb-20">Promo</h4>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox"/>Algo
                </label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox"/>ETH
                </label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox"/>btc
                </label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox"/>ADA
                </label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox"/>DOT
                </label>
              </div>
            </div>
            <div className="box-gray mb-4">
              <h4 className="small-title text-capitaliz mb-20">size</h4>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox"/>xs
                </label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox"/>s
                </label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox"/>m
                </label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox"/>l
                </label>
              </div>
              <div className="checkbox mb-3">
                <label>
                  <input type="checkbox"/>xl
                </label>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
    <ReactModal isOpen={catalogShow} onRequestClose={() => setCatalogShow(false)} className="modal--filters" ariaHideApp={false}>
      <div id="modal-catalog" className="modal fade" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content filters-mobile">
            <div className="filters-mobile__header">
              <div className="container">
                <a href="#/" className="logo">
                  <img src={Logo} alt=""/>
                </a>
                <button type="button" className="btn-burger" data-dismiss="modal" data-toggle="modal" data-target="#modal-nav" onClick={() => {setCatalogShow(false); setOpen(true)}}>
                  <svg className="svg-icon" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12.5H21" stroke="#62514B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 6.5H21" stroke="#62514B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 18.5H21" stroke="#62514B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="filters-mobile__content container">
              <button type="button" className="btn-stake btn--black mb-4" data-dismiss="modal" aria-label="Close" onClick={() => setCatalogShow(false)}>Close catalog</button>
              <div className="box-gray mb-4">
                <h4 className="small-title text-capitalize mb-20">Catalog</h4>
                <ul className="category-list">
                  <li className="active"><a href="#/">Hoodies</a></li>
                  <li><a href="#/">T-Shirts</a></li>
                  <li><a href="#/">Pants</a></li>
                  <li><a href="#/">Accessories</a></li>
                </ul>
              </div>
            </div>
            <div className="filters-mobile__footer">
              <div className="container">
                <button type="button" className="btn-stake btn--black" data-dismiss="modal" aria-label="Close" onClick={() => setCatalogShow(false)}>apply catalog</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>

    <ReactModal isOpen={filterShow} onRequestClose={() => setFilterShow(false)} className="modal--filters" ariaHideApp={false}>
      <div id="modal-filters" className="modal fade" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content filters-mobile">
            <div className="filters-mobile__header">
              <div className="container">
                <a href="#/" className="logo">
                  <img src={Logo} alt=""/>
                </a>
                <button type="button" className="btn-burger" data-dismiss="modal" data-toggle="modal" data-target="#modal-nav" onClick={() => {setFilterShow(false); setOpen(true)}}>
                  <svg className="svg-icon" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12.5H21" stroke="#62514B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 6.5H21" stroke="#62514B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 18.5H21" stroke="#62514B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="filters-mobile__content container">
              <button type="button" className="btn-stake btn--black mb-4" data-dismiss="modal" aria-label="Close" onClick={() => setFilterShow(false)}>apply filter</button>
              <div className="box-gray mb-4">
                <h4 className="small-title text-capitalize mb-20">Promo</h4>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox"/>Algo
                  </label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox"/>ETH
                  </label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox"/>btc
                  </label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox"/>ADA
                  </label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox"/>DOT
                  </label>
                </div>
              </div>
              <div className="box-gray mb-4">
                <h4 className="small-title text-capitaliz mb-20">size</h4>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox"/>xs
                  </label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox"/>s
                  </label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox"/>m
                  </label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox"/>l
                  </label>
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <input type="checkbox"/>xl
                  </label>
                </div>
              </div>
            </div>
            <div className="filters-mobile__footer">
              <div className="container">
                <button type="button" className="btn-stake btn--black" data-dismiss="modal" aria-label="Close" onClick={() => setFilterShow(false)}>apply filter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
    </>
  );
};

export default CatalogScreen;
