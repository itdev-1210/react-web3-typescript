import React from 'react';

import Faq from 'components/Faq/Faq';
import ProductSlider from 'components/Product/Slider';
import { ProductData } from 'components/Product/Types';

import HeroSlider from './components/HeroSlider';

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

const hoddies:ProductData[] =[
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
]

const accessories:ProductData[] = [
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
    asset2x: Product3_2x
  },
  {
    text: "oversized navi x kseniaschnaider hoodle with squares",
    price: '11000',
    asset: Product4,
    asset2x: Product4_2x,
    additional: '4350'
  },
]
const HomeScreen = () => {
  return (
    <>
    <HeroSlider></HeroSlider>
    <main className="content content--home">
      <div className="container container--small">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-12 offset-lg-0">
            <h1 className="short-title">Quisque ornare</h1>
            <div className="small-title small-title--color">deposit liquidity on uniswap</div>
          </div>
          <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-0">
            <p>Fusce suscipit feugiat tristique. Nullam dictum, risus sit amet imperdiet imperdiet, lectus diam tincidunt eros, non ultricies quam dui vitae libero. Duis tellus diam, varius id elit quis, placerat feugiat lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          </div>
          <div className="col-md-10 offset-md-1 col-lg-6 offset-lg-0">
            <p>Nullam sed mi vel mi posuere tempus. Donec pharetra massa non nibh consectetur, imperdiet elementum nibh condimentum. Fusce vehicula, sem quis porttitor ultrices, nisl dolor ultricies ipsum, finibus feugiat ex est eget mauris.</p>
          </div>
        </div>
      </div>
    </main>
    <ProductSlider title="Popular Merch" list={populars}/>
    <ProductSlider title="Hoddies" list={hoddies}/>
    <ProductSlider title="Accessories" list={accessories}/>
    <Faq></Faq>
    </>
  );
};

export default HomeScreen;
