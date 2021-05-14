import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Hero2 from 'assets/Images/hero-slider-2.png';
import Hero2_2x from 'assets/Images/hero-slider-2@x2.png';
import Hero1 from 'assets/Images/hero-slider-1.png';
import Hero1_2x from 'assets/Images/hero-slider-1@x2.png';
import { useRef } from "react";

const HeroSlider = () => {
  const hero_slider = useRef<Slider>(null);
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '56px',
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          variableWidth: true,
          centerMode: false,
          slidesToShow: 1,
          centerPadding: '0'
        }
      },
      {
        breakpoint: 768,
        settings: {
          variableWidth: true,
          centerMode: false,
          slidesToShow: 1,
          centerPadding: '50px'
        }
      },
      {
        breakpoint: 991,
        settings: {
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          centerPadding: '0'
        }
      }
    ]
  };

  const handleNextClick = () => {
    hero_slider?.current?.slickNext();
  }

  const handlePrevClick = () => {
    hero_slider?.current?.slickPrev();
  }

  return (
    <section className="hero hero-slider">
      <Slider {...settings} className="hero-slider-wrapper" ref={hero_slider}>
        <div>
          <div className="container container--small">
            <div className="hero-content">
              <h2 className="section-title hero-content__title">
                <span className="hero-content__title--big">Stake 9k+ </span><span className="hero-content__title--color">MRCH</span><br></br>
                <span className="hero-content__title--small">
                  & get official merch <br></br>
                  from <span className="hero-content__title--gradient">merchadao</span>
                </span>
              </h2>
              <button type="button" className="btn btn--color">start staking</button>
            </div>

            <div className="hero-picture">
              <img
                src={Hero2}
                srcSet={`${Hero2} 1x, ${Hero2_2x} 2x`}
                alt=""></img>
            </div>

            <div className="hero-logo">
              <span className="icon icon__logo-merchdao-and-algo"></span>
            </div>
          </div>
        </div>

        <div>
          <div className="container container--small">
            <div className="hero-content">
              <h2 className="section-title hero-content__title">
                Stake <span className="hero-content__title--color">algo & mrch</span><br></br>
                and get our premium<br></br>
                merch
              </h2>
              <ul className="hero-content__coins">
                <li>
                  <span className="icon icon__mrch"></span>
                </li>
                <li>
                  <span className="icon icon__algo"></span>
                </li>
              </ul>
              <button type="button" className="btn btn--color">start staking</button>
            </div>

            <div className="hero-picture">
              <img
                src={Hero1}
                srcSet={`${Hero1} 1x, ${Hero1_2x} 2x`}
                alt=""></img>
            </div>

            <div className="hero-logo">
              <span className="icon icon__logo-merchdao"></span>
            </div>
          </div>
        </div>
      </Slider>
      <div className="hero__arrows">
        <button type="button" className="slider-button-next" onClick={handleNextClick}></button>
        <button type="button" className="slider-button-prev" onClick={handlePrevClick}></button>
      </div>

      {/* <div className="slick-pagination"></div> */}
    </section>
  );
};

export default HeroSlider;
