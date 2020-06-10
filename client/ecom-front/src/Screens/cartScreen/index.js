import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../actions/cartAction';
import './index.css';
export default function Index(props) {
  const productId = props.match.params.id;
  const quantity = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, []);
  return (
    <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>cart items</h3>
            <div>price</div>
          </li>
          {cartItems.length === 0 ? (
            <div>Cart is empty</div>
          ) : (
            cartItems.map((el, i) => (
              <li>
                <img src={el.image} alt="" />
                <div className="product-cart-info">
                  <div className="product-cart-name">{el.name}</div>
                  <div className="product-cart-qty">
                    Qty:{' '}
                    <select>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className="product-cart-price">{el.price}</div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="cart-action">
        <h3>
          Subtototal : {cartItems.reduce((a, b) => a + b.quantity, 0)} items : ${' '}
          {cartItems.reduce((a, b) => a + b.quantity * b.price, 0)}
        </h3>
        <button disabled={cartItems.length === 0}>proceed to checkout</button>
      </div>
    </div>
  );
}
