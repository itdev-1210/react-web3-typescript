import Item from './SliderItem';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Product1 from 'assets/Images/product-slider-1.png';
import Product1_2x from 'assets/Images/product-slider-1@x2.png';
import Product2 from 'assets/Images/product-slider-2.png';
import Product2_2x from 'assets/Images/product-slider-2@x2.png';
import Product3 from 'assets/Images/product-slider-3.png';
import Product3_2x from 'assets/Images/product-slider-3@x2.png';
import Product4 from 'assets/Images/product-slider-4.png';
import Product4_2x from 'assets/Images/product-slider-4@x2.png';

import ProductThumb1 from 'assets/Images/product-cart-thumbs-1.png';
import ProductThumb1_2x from 'assets/Images/product-cart-thumbs-1@x2.png';
import ProductThumb2 from 'assets/Images/product-cart-thumbs-2.png';
import ProductThumb2_2x from 'assets/Images/product-cart-thumbs-2@x2.png';
import ProductThumb3 from 'assets/Images/product-cart-thumbs-3.png';
import ProductThumb3_2x from 'assets/Images/product-cart-thumbs-3@x2.png';
import ProductThumb4 from 'assets/Images/product-cart-thumbs-4.png';
import ProductThumb4_2x from 'assets/Images/product-cart-thumbs-4@x2.png';

const ShopSlider = () => {
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '56px',
    mobileFirst: true,
    // asNavFor: '.product-slider-thumbs',
    responsive: [
      {
        breakpoint: 575,
        settings: {
          variableWidth: true,
          centerMode: true,
          slidesToShow: 1,
          centerPadding: '0'
        }
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: true,
          centerMode: true,
          slidesToShow: 1,
          centerPadding: '50px',
        }
      },
      {
        breakpoint: 991,
        settings: {
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          centerPadding: '0'
        }
      }
    ]
  };
  const thumbSettings = {
    dots: false,
    arrows: false,
    vertical: true,
    draggable: true,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    verticalSwiping: true,
    // asNavFor: '.product-slider'
  }
  return (
    <div className="product-sliders-wrap">
      <Slider {...settings} className="product-slider">
        <Item className="product-slider__item" asset={Product1} asset2x={Product1_2x}></Item>
        <Item className="product-slider__item" asset={Product2} asset2x={Product2_2x}></Item>
        <Item className="product-slider__item" asset={Product3} asset2x={Product3_2x}></Item>
        <Item className="product-slider__item" asset={Product4} asset2x={Product4_2x}></Item>
        <Item className="product-slider__item" asset={Product1} asset2x={Product1_2x}></Item>
        <Item className="product-slider__item" asset={Product2} asset2x={Product2_2x}></Item>
        <Item className="product-slider__item" asset={Product3} asset2x={Product3_2x}></Item>
        <Item className="product-slider__item" asset={Product4} asset2x={Product4_2x}></Item>
      </Slider>

      <Slider {...thumbSettings} className="product-slider-thumbs">
        <Item className="product-slider-thumbs__item" asset={ProductThumb1} asset2x={ProductThumb1_2x}></Item>
        <Item className="product-slider-thumbs__item" asset={ProductThumb2} asset2x={ProductThumb2_2x}></Item>
        <Item className="product-slider-thumbs__item" asset={ProductThumb3} asset2x={ProductThumb3_2x}></Item>
        <Item className="product-slider-thumbs__item" asset={ProductThumb4} asset2x={ProductThumb4_2x}></Item>
        <Item className="product-slider-thumbs__item" asset={ProductThumb1} asset2x={ProductThumb1_2x}></Item>
        <Item className="product-slider-thumbs__item" asset={ProductThumb2} asset2x={ProductThumb2_2x}></Item>
        <Item className="product-slider-thumbs__item" asset={ProductThumb3} asset2x={ProductThumb3_2x}></Item>
        <Item className="product-slider-thumbs__item" asset={ProductThumb4} asset2x={ProductThumb4_2x}></Item>
      </Slider>
    </div>
  );
};

export default ShopSlider;
