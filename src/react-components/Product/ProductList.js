import React from 'react';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul className="product-list">
          {
            this.props.productList.map(function(item, idx){
              return <ProductItem key={idx} {...item} pId={item.key} />
            })
          }
      </ul>
    );
  }
}

export default ProductList;
