import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductFromApi } from '../../actions/productDetailAction';
import './index.css';
export default function Index(props) {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetail);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductFromApi(props.match.params.id));
  }, []);

  const handleAddToCart = () => {
    props.history.push(`/cart/${props.match.params.id}?qty=${qty}`);
  };

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
            <li>
              status:{' '}
              {product.countInStock > 0 ? (
                <span>In stock</span>
              ) : (
                <span>out of stock</span>
              )}
            </li>
            <li>count in stock : {product.countInStock}</li>
            <li>
              Qty :{' '}
              <select value={qty} onChange={(e) => setQty(e.target.value)}>
                {[...Array(product.countInStock).keys()]
                  .filter((el, i) => i < 10)
                  .map((el, i) => (
                    <option value={el + 1} key={i}>
                      {el + 1}
                    </option>
                  ))}
              </select>
            </li>
          </ul>
          {product.countInStock > 0 && (
            <button onClick={handleAddToCart}>Add to cart</button>
          )}
        </div>
      </div>
    </div>
  );
}
