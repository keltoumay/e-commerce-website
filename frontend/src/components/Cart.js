mport React from 'react';

function Cart({ cartItems }) {
	  return (
		      <div>
		        <h1>Your Cart</h1>
		        {cartItems.map((item) => (
				        <div key={item._id}>
				          <p>{item.name}</p>
				          <p>{item.price}</p>
				        </div>
				      ))}
		      </div>
		    );
}

export default Cart;
