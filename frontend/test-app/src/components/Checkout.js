import React from 'react';

function Checkout() {
	  const handleCheckout = () => {
		      console.log('Checkout completed');
		    };

	  return (
		      <div>
		        <h1>Checkout</h1>
		        <button onClick={handleCheckout}>Complete Purchase</button>
		      </div>
		    );
}

export default Checkout;
