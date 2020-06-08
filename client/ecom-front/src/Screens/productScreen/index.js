import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductFromApi } from '../../actions/productDetailAction';
import './index.css';
export default function Index(props) {
  const productDetails = useSelector((state) => state.productDetail);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductFromApi(props.match.params.id));
  }, []);
  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
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
