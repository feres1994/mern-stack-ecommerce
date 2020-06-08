import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data';
import './index.css';
export default function index(props) {
  const product = products.find((x) => x.id === props.match.params.id);
  console.log(product);
  return (
    <div>
      <div>
        <Link to="/">back to results</Link>
      </div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt="product" />
        </div>
        <div className="detail-info">
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>
              {product.rating} Starts ({product.reviews} Reviews)
            </li>
            <li>
              <b>{product.price}</b>
            </li>
            <li>
              Description
              <div>
                loru j kj k l lmkmlkmlk lkmlkmlk klklko koko ij iji ji h uhjjhk
                khk j
              </div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>price : {product.price}</li>
            <li>price : {product.price}</li>
            <li>
              Qty :{' '}
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
