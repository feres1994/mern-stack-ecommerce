import React, { useEffect } from 'react';

export default function index(props) {
  const productId = props.match.parmas.id;
  const quantity = props.search.location
    ? Number(props.search.location.split('=')[1])
    : 1;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, []);
  return <div>cart</div>;
}
