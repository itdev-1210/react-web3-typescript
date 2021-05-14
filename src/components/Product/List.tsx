import Product from './Product';
import { ProductData } from './Types';

interface ListProps {
  title: string;
  list: ProductData[];
}

const List = (props: ListProps) => {
  return (
    <section className="section hoodies">
      <div className="container">
        <h2 className="section-title">{props.title}</h2>
        <div className="product-card-list">
          {props.list.map((list, index) => <div className="col product-card-list__item" key={index}>
            <Product data={list}></Product></div>)}
        </div>
      </div>
    </section>
  );
};

export default List;
