import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductsFromApi } from '../../actions/productListAction';
import './index.css';
export default function Index() {
  const productList = useSelector((state) => state.products); //mapState To Props
  const { products, loading, error } = productList;
  const dispatch = useDispatch(); //mapDispatch to props
  useEffect(() => {
    dispatch(getProductsFromApi());
  }, []);

  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <ul className="products">
      {products.map((product, i) => (
        <li key={i}>
          <div className="product">
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt="" />
            </Link>
            <div className="product-name">
              <Link to={`/products/${product.id}`}>{product.name} </Link>
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
