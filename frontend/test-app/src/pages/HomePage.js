import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions'; // Import action

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products on mount
  }, [dispatch]);

  console.log('Products:', products); // Debugging

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {Array.isArray(products) ? (
          products.map(product => (
            <li key={product.id}>{product.name}</li>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ul>
    </div>
  );
};

export default HomePage;