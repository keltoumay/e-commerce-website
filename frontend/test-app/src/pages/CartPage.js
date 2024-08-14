import React from 'react';
import Cart from '../components/Cart';
import { useSelector } from 'react-redux';

function CartPage() {
	  const cartItems = useSelector((state) => state.orders.cartItems);

	  return (
		      <div>
		        <h1>Cart Page</h1>
		        <Cart cartItems={cartItems} />
		      </div>
		    );
}

export default CartPage;
