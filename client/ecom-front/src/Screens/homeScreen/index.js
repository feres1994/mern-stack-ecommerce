import React from 'react';
import { products } from '../../data';
import './index.css';
export default function index() {
  return (
    <ul className="products">
      {products.map((product, i) => (
        <li>
          <div className="product">
            <img src={product.image} alt="" />
            <div className="product-name">
              <a href="#">{product.name}</a>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="price">${product.price}</div>
            <div className="product-rating">
              {product.rate}({product.reviews} Reviews)
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
