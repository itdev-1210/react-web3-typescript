import { Link } from 'react-router-dom';
import { ProductData } from './Types';

interface ProductProps {
  data: ProductData;
}

const Product = (props: ProductProps) => {
  return (
    <div className="product-card">
      <div className="product-card__picture">
        <img
          src={props.data.asset}
          srcSet={`${props.data.asset} 1x, ${props.data.asset2x} 2x`}
          alt=""></img>
      </div>
      <h3 className="product-card__text">{props.data.text}</h3>
      <div className="product-card__price">
        <span className="product-card__price__merch">{props.data.price}</span>
        {props.data.additional && <div className="product-card__price__additional-price additional-price">
          <div className="additional-price__coin">
            <svg className="svg-icon" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.6018 23.0531L12.7788 19.2832L14.9558 15.5266L17.1195 11.7566L17.4779 11.1593L17.6372 11.7566L18.3009 14.2389L17.5575 15.5266L15.3805 19.2832L13.2168 23.0531H15.8186L17.9956 19.2832L19.1239 17.3319L19.6549 19.2832L20.6637 23.0531H23L21.9911 19.2832L20.9823 15.5266L20.7168 14.5575L22.3363 11.7566H19.9735L19.8938 11.4779L19.0708 8.39823L18.9646 8H16.6947L16.6416 8.07965L14.5177 11.7566L12.3407 15.5266L10.177 19.2832L8 23.0531H10.6018Z"/>
            </svg>
          </div>
          <div className="additional-price__price">{props.data.additional}</div>
        </div>}
      </div>
      <Link to="/shop" className="btn-stake">Stake</Link>
    </div>
  );
};

export default Product;
