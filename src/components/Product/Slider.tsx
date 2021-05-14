import Product from './Product';
import { ProductData } from './Types';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface SliderProps {
  title: string;
  list: ProductData[];
}

const ProductSlider = (props: SliderProps) => {
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '10px',
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerPadding: '220px',
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerPadding: '330px',
        }
      },
      {
        breakpoint: 1420,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerPadding: '0',
          draggable: true,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 1520,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          centerPadding: '0',
          draggable: true,
          swipeToSlide: true,
        }
      }
    ]
  };
  return (
    <section className="section popular">
      <div className="container">
        <h2 className="section-title">{props.title}</h2>
        <Slider {...settings} className="popular-slider">
          {props.list.map((list, index) => <div key={index}>
          <div className="popular-slider__item">
            <Product data={list}></Product>
          </div></div>)}
        </Slider>
      </div>
    </section>
  );
};

export default ProductSlider;
